import { useEffect, useState } from "react";
import { API_URL } from "../utils";
import {
  Box,
  Text,
  Link as ChakraLink,
  ListItem,
  List
} from "@chakra-ui/react";

import axios from "axios";
import { useParams } from "react-router-dom";

export default function SongsPage() {
  const params = useParams();
  const artist_id = params.id;

  const [songs, setSongs] = useState(null);
  const token = localStorage.getItem("spotify_token");

  const searchSongs = () => {
    axios
      .get(`${API_URL}/artists/${artist_id}/top-tracks?market=BG`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        setSongs(res.data.tracks);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    searchSongs();
  }, []);
  return (
    <div className="albums">
      {" "}
      <div className="grid">
        <List spacing={3}>
          {songs?.map((song) => (
            <ListItem>
              <ChakraLink href={`${song.preview_url}`} isExternal>
                <Box
                  as="button"
                  borderRadius="md"
                  bg="grey"
                  color="white"
                  px={6}
                  h={26}
                >
                  <i class="fa fa-play"> Play </i>
                </Box>
              </ChakraLink>
              <Box ml="3">
                <Text fontWeight="bold">{song.name}</Text>
                <Text fontSize="sm">
                  {song.artists[0].name}, Album: {song.album.name}
                </Text>
              </Box>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
