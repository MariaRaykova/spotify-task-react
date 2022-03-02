import "./styles.css";
import { useEffect } from "react";

import { getSpotifyToken } from "./services";
export default function App(props) {
  useEffect(() => {
    getSpotifyToken();
  }, []);
  return (
    <div className="App">
      <h1>Spotify Task</h1>
      <div id="app">{props.children}</div>
    </div>
  );
}
