import styles from "./PlaylistCard.module.css";

const PlaylistCard = ({ play }) => {
  return (
    <div>
      <img src="https://picsum.photos/200/200" alt="playlist" />
      <h3>{play.name}</h3>
    </div>
  );
};

export default PlaylistCard;
