import HomeLayout from "../../components/HomeLayout/HomeLayout";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../contexts/DataContext";
import styles from "./WatchLater.module.css";

const WatchLater = () => {
  const {
    data: { videos },
  } = useData();

  const filteredVideos = videos.filter((video) => video.watchList);
  return (
    <>
      <HomeLayout headerName="Watch Later">
        {filteredVideos.map((video) => (
          <VideoCard video={video} />
        ))}
      </HomeLayout>
    </>
  );
};

export default WatchLater;
