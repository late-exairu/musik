import Hero from "../components/Hero";
import Categories from "../components/Categories";
import About from "../components/About";

export default function Home({ hero, categories, about }) {
  return (
    <>
      <Hero {...hero} />
      <Categories {...categories} />
      <About {...about} />
    </>
  );
}
