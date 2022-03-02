import "./styles.css";
import { useEffect } from "react";
import SearchPage from "./pages/SearchPage";
import { getSpotifyToken } from "./services";
export default function App(props) {
  useEffect(() => {
    getSpotifyToken();
  }, []);
  return (
    <div className="App">
      <h1>Spotify</h1>
      <div id="app">{props.children}</div>
    </div>
  );
}
