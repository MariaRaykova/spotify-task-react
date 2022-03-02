import { useEffect, useState } from "react";
import { API_URL } from "../utils";
import { Box, Center, Image } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AlbumsPage() {
  const params = useParams();
  const artist_id = params.id;

  const [albums, setAlbums] = useState(null);
  const token = localStorage.getItem("spotify_token");

  const searchAlbums = () => {
    axios
      .get(`${API_URL}/artists/${artist_id}/albums`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(JSON.stringify(res.items));
        setAlbums(res.data.items);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    searchAlbums();
  }, []);
  return (
    <div className="albums">
      {" "}
      <div className="grid">
        {albums?.map((album) => (
          <div>
            <Center h="100vh">
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={`${album.images[1]?.url}`} />
                <Box display="flex" alignItems="baseline">
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    ml="2"
                  >
                    Release Date: {album.release_date} &bull;{" "}
                    {album.total_tracks} Tracks
                  </Box>
                </Box>
                <Box p="6">
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {album.name}
                  </Box>

                  <Box>{album.artists[0].name}</Box>
                </Box>
              </Box>
            </Center>
          </div>
        ))}
      </div>
    </div>
  );
}
