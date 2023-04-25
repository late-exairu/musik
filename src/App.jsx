import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Schedule from "./pages/Schedule";
import Contacts from "./pages/Contacts";
import data from "./data/data.json";
import ScheduleDay from "./components/ScheduleDay";

function App() {
  const scheduleList = data.pages.home.schedule.scheduleList;

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home {...data.pages.home} />}>
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
    </BrowserRouter>
  );
}

export default App;
