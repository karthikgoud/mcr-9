import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import VideoListing from "./pages/VideoListing/VideoListing";
import "./App.css";
import SingleVideo from "./pages/SingleVideo/SingleVideo";
import WatchLater from "./pages/WatchLater/WatchLater";
import Explore from "./pages/Explore/Explore";
import Playlist from "./pages/Playlist/Playlist";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<VideoListing />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
