import useTitle from "../../hooks/useTitle";
import FAQ from "./FAQ/FAQ";
import Locations from "./Locations/Locations";
import Gallary from "./container/Gallary";
import Header from "./container/Header";
import ToysCetagories from "./container/ToysCetagories";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <Gallary />
      <ToysCetagories />
      <Locations />
      <FAQ />
    </>
  );
};

export default Home;
