import Hero from "../components/Hero";
import Categories from "../components/Categories";
import About from "../components/About";
import Singers from "../components/Singers";

export default function Home({ hero, categories, about, singers }) {
  return (
    <>
      <Hero {...hero} />
      <Categories {...categories} />
      <About {...about} />
      <Singers {...singers} />
    </>
  );
}
