import Hero from "../components/Hero";
import Categories from "../components/Categories";
import About from "../components/About";
import Singers from "../components/Singers";
import Schedule from "../components/Schedule";
import Prices from "../components/Prices";
import Sponsors from "../components/Sponsors";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import ContactsSection from "../components/ContactsSection";

export default function Home({
  hero,
  categories,
  about,
  singers,
  schedule,
  prices,
  sponsors,
  testimonials,
  gallery,
  contactUs,
  contactForm,
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
      <Testimonials {...testimonials} />
      <Gallery {...gallery} />
      <ContactsSection contactUs={contactUs} contactForm={contactForm} />
    </>
  );
}
