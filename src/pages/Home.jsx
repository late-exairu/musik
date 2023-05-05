import Hero from "../components/Hero";
import Categories from "../components/Categories";
import About from "../components/About";
import Singers from "../components/Singers";
import Schedule from "../components/Schedule";
import Prices from "../components/Prices";
import Sponsors from "../components/Sponsors";

export default function Home({
  hero,
  categories,
  about,
  singers,
  schedule,
  prices,
  sponsors,
}) {
  return (
    <>
      <Hero {...hero} />
      <Categories {...categories} />
      <About {...about} />
      <Singers {...singers} />
      <Schedule {...schedule} />
      <Prices {...prices} />
      <Sponsors {...sponsors} />
    </>
  );
}
