import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Knowledge from "./pages/Knowledge";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router basename="/my-portfolio">         {/* Add your repo name here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
