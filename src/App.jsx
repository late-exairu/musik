import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./components/Header";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Schedule from "./pages/Schedule";
import Contacts from "./pages/Contacts";
import ScheduleDay from "./components/ScheduleDay";
import Footer from "./components/Footer";
import data from "./data/data.json";

function App() {
  const scheduleList = data.sections.schedule.scheduleList;

  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/musik"
            element={<Home hero={data.pages.home.hero} {...data.sections} />}
          >
            {scheduleList.map((item, index) => (
              <Route
                path={`${index === 0 ? "" : index}`}
                index={index === 0 ? true : false}
                key={index}
                element={<ScheduleDay list={item.list} />}
              ></Route>
            ))}
          </Route>
          <Route path="/artists" element={<Artists />}></Route>
          <Route path="/schedule" element={<Schedule />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>

        <Footer socials={data.brand.socials} {...data.footer} />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
