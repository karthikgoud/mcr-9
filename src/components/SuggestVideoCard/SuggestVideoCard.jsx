import styles from "./SuggestVideoCard.module.css";

const SuggestVideoCard = ({ video }) => {
  return (
    <div className={styles.videoCardCont}>
      <div className={styles.imgCont}>
        <img src={video.thumbnail} alt={video.title} />
      </div>
      <div className={styles.videoDetail}>
        <p>{video.title}</p>
        <p>{video.creator}</p>
      </div>
    </div>
  );
};

export default SuggestVideoCard;
