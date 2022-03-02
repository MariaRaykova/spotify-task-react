import { Routes, Route } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import AlbumsPage from "./pages/AlbumsPage";
import SongsPage from "./pages/SongsPage";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<SearchPage />} />
      <Route path="/albums/:id" element={<AlbumsPage />} />
      <Route path="/songs/:id" element={<SongsPage />} />
    </Routes>
  );
};

export default Router;
