import { Route, Routes } from "react-router";
import Home from "./features/home";
import About from "./features/about";
import Contact from "./features/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
