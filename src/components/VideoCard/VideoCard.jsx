import { NavLink } from "react-router-dom";
import { MdWatchLater } from "react-icons/md";

import styles from "./VideoCard.module.css";
import { useData } from "../../contexts/DataContext";

const VideoCard = ({ video }) => {
  const {
    data: { videos },
    dispatch,
  } = useData();

  function handleWatchLater(e, id) {
    e.preventDefault();
    dispatch({ type: "TOGGLE_WATCHLATER", payload: id });
  }

  return (
    <NavLink to={`/video/${video._id}`}>
      <div className={styles.videoCardCont}>
        <img src={video.thumbnail} alt={video.category} />
        <div className={styles.videoDetails}>
          <div>
            <img src="https://picsum.photos/40/40" alt="profile image" />
          </div>
          <div>
            <h4>{video.title}</h4>
            <p>{video.category}</p>
            <div>
              <small>{video.views} views</small> |{" "}
              <small>{video.creator}</small>
            </div>
          </div>
        </div>
        <div className={styles.watchLaterIcon}>
          <MdWatchLater
            onClick={(e) => handleWatchLater(e, video._id)}
            style={{ color: video?.watchList ? "red" : "" }}
          />
        </div>
      </div>
    </NavLink>
  );
};

export default VideoCard;
