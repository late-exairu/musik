import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Schedule from "./pages/Schedule";
import Contacts from "./pages/Contacts";
import data from "./data/data.json";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home {...data.pages.home} />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
