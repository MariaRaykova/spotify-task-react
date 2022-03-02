import { API_URL } from "../utils";
import axios from "axios";
import { client_id, client_secret } from "../utils";

export const getSpotifyToken = () => {
  axios
    .post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64")
        }
      }
    )
    .then((res) => {
      window.localStorage.setItem("spotify_token", res.data.access_token);
    })
    .catch((err) => {
      console.log("getSpotifyToken", err);
    });
};
