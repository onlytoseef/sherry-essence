import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "./Services/Services";
import ProductDetails from "../../components/ProductDetails";
import ScrollToTop from "../../utils/ScrollToTop";
import Cart from "./Cart";

export default function Index() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
