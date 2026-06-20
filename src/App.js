import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Testimonial from "./components/Testimonial";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <LoadingScreen hidden={loaded} onReady={() => setLoaded(true)} />
      <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
    </>  
  );
}

export default App;
