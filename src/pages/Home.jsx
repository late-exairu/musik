import Hero from "../components/Hero";
import Categories from "../components/Categories";

export default function Home({ hero, categories }) {
  return (
    <>
      <Hero {...hero} />
      <Categories {...categories} />
    </>
  );
}
