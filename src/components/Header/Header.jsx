import styles from "./Header.module.css";

const Header = ({ title }) => {
  return <h2 className={styles.headerCont}>{title}</h2>;
};

export default Header;
