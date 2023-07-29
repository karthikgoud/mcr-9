import styles from "./Navigation.module.css";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";
//
const Navigation = () => {
  return (
    <div>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItemCont
        }
      >
        <AiFillHome className={styles.icon} /> Home
      </NavLink>
      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItemCont
        }
      >
        <MdExplore className={styles.icon} /> Explore
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItemCont
        }
      >
        <MdPlaylistAdd className={styles.icon} /> Playlists
      </NavLink>
      <NavLink
        to="/watchlater"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navItemCont
        }
      >
        <MdWatchLater className={styles.icon} /> Watch Later
      </NavLink>
    </div>
  );
};

export default Navigation;
