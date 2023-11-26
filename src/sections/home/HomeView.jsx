import Hero from "./Hero";
import Companies from "./Companies";
import Guide from "./Guide";
import Trending from "./Trending";
import Details from "./Details";
import Contact from "./Contact";

const HomeView = () => {
  return (
    <>
      {/* hero */}
      <Hero />
      {/* product */}
      <Companies />
      <Guide />
      <Trending />
      <Details />
      <Contact />
    </>
  );
};

export default HomeView;