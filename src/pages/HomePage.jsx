import { Helmet } from "react-helmet-async";
import HomeView from "~/sections/home/HomeView";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title> Home | TuliBear </title>
      </Helmet>
      <HomeView />
    </>
  );
};

export default HomePage;