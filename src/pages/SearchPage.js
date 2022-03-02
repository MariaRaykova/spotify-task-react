import { useEffect, useState } from "react";
import { API_URL } from "../utils";
import { Box, Center, Image, Flex, Text, Stack, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [artists, setArtists] = useState(null);
  const token = localStorage.getItem("spotify_token");
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
    searchArtist();
  };
  const searchArtist = () => {
    axios
      .get(`${API_URL}/search?q=${value}&type=artist`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setArtists(res.data.artists.items);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="search">
      <div className="grid">
        <Stack>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Search artist..."
          />
        </Stack>

        {value
          ? artists?.map((artist) => (
              <Center h="100vh">
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={`${artist.images[1]?.url}`} />
                  <Flex align="baseline" mt={2}></Flex>
                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    {artist.name}
                  </Text>
                  <Text mt={2}>{artist.type}</Text>

                  <Box h="20px">
                    <Link to={`/albums/${artist.id}`}>Albums</Link>
                  </Box>
                  <Box h="20px">
                    <Link to={`/songs/${artist.id}`}>Songs</Link>
                  </Box>
                  <Flex mt={2} align="center">
                    <Text ml={1} fontSize="sm">
                      <b>Followers: {artist.followers.total}</b>
                    </Text>
                  </Flex>
                </Box>
              </Center>
            ))
          : null}
      </div>
    </div>
  );
}
