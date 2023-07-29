import { useParams } from "react-router";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import { useData } from "../../contexts/DataContext";
import styles from "./VideoListing.module.css";
import VideoCard from "../../components/VideoCard/VideoCard";

const VideoListing = () => {
  const {
    data: { videos },
  } = useData();

  const { category } = useParams();

  const selectedVideos = videos.filter((video) => video.category == category);
  return (
    <>
      <HomeLayout headerName={category}>
        {selectedVideos.map((video) => (
          <VideoCard video={video} />
        ))}
      </HomeLayout>
    </>
  );
};

export default VideoListing;
