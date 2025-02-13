import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
