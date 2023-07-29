import { NavLink } from "react-router-dom";
import styles from "./CategoryCard.module.css";

const CategoryCard = ({ category }) => {
  return (
    <NavLink to={`/category/${category.category}`}>
      <div className={styles.categoryCardCont}>
        <img src={category.thumbnail} alt={category.category} />
        <h3>{category.category}</h3>
      </div>
    </NavLink>
  );
};

export default CategoryCard;
