import Home from "./Components/Home/Home";
import Technology from "./Components/Technology/Technology";
import Destination from "./Components/destination/Destination";
import Crew from "./Components/crew/Crew";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Moon from "../src/Components/Moon/Moon";
import Mars from "../src/Components/Mars/Mars";
import Europa from "../src/Components/Europa/Europa";
import Titan from "../src/Components/Titan/Titan";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Technology" element={<Technology />} />
        <Route path="Destination" element={<Destination />}>
          <Route path="Moon" element={<Moon />} />
          <Route path="Europa" element={<Europa />} />
          <Route path="Titan" element={<Titan />} />
          <Route path="Mars" element={<Mars />} />
        </Route>
        <Route path="Crew" element={<Crew />} />
      </Routes>
    </>
  );
}

export default App;
