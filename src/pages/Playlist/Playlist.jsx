import HomeLayout from "../../components/HomeLayout/HomeLayout";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import { useData } from "../../contexts/DataContext";
import styles from "./Playlist.module.css";

const Playlist = () => {
  const {
    data: { playList },
  } = useData();

  return (
    <>
      <HomeLayout>
        {playList.map((play) => (
          <PlaylistCard play={play} />
        ))}
      </HomeLayout>
    </>
  );
};

export default Playlist;
