import { useData } from "../../contexts/DataContext";
import CategoryCard from "../CategoryCard/CategoryCard";
import Navigation from "../Navigation/Navigation";
import SuggestVideoCard from "../SuggestVideoCard/SuggestVideoCard";
import styles from "./SingleVideoLayout.module.css";

const SingleVideoLayout = ({ children }) => {
  const {
    data: { videos },
  } = useData();

  return (
    <div className={styles.homeCont}>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.categoryCont}>
        <div className={styles.mainVideoCont}>{children}</div>
      </main>
      <aside>
        <header>
          <h3>More videos:</h3>
        </header>
        <div>
          {videos.map((video) => (
            <SuggestVideoCard video={video} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default SingleVideoLayout;
