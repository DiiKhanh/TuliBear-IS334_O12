import Hero from "./Hero";
import Companies from "./Companies";
import Guide from "./Guide";
import Trending from "./Trending";
import Details from "./Details";
import Contact from "./Contact";
import Blog from "./Blog";

const HomeView = () => {
  return (
    <>
      {/* hero */}
      <Hero />
      {/* product */}
      <Companies />
      <Trending />
      <Details />
      <Blog />
      <Contact />
      <Guide />
    </>
  );
};

export default HomeView;