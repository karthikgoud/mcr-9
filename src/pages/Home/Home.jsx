import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Header from "../../components/Header/Header";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import Navigation from "../../components/Navigation/Navigation";
import { useData } from "../../contexts/DataContext";
import styles from "./Home.module.css";

const Home = () => {
  const {
    data: { categoryData },
  } = useData();

  return (
    <>
      <HomeLayout headerName="Categories">
        {categoryData.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </HomeLayout>
    </>
  );
};

export default Home;
