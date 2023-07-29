import { useState } from "react";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../contexts/DataContext";
import styles from "./Explore.module.css";

const Explore = () => {
  const { data, dispatch, filterSearch } = useData();
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
    dispatch({ type: "FILTER", payload: e.target.value });
  }

  return (
    <>
      <HomeLayout headerName={"Explore"}>
        <div className={styles.container}>
          <div className={styles.filterInput}>
            <input
              type="text"
              placeholder="Search video by Title"
              value={text}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.mainVideoCont}>
            {filterSearch.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default Explore;
