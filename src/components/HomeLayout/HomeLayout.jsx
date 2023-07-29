import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import styles from "./HomeLayout.module.css";

const HomeLayout = ({ headerName, children }) => {
  return (
    <div className={styles.homeCont}>
      <nav>
        <Navigation />
      </nav>
      <main className={styles.categoryCont}>
        <header>
          <h2>{headerName}</h2>
        </header>
        <div className={styles.mainVideoCont}>{children}</div>
      </main>
    </div>
  );
};

export default HomeLayout;
