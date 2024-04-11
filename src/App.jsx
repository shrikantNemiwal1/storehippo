import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BrandsSection from "./components/BrandsSection";
import PortfolioSection from "./components/PortfolioSection";
import { useEffect, useState } from "react";
import ProductsSection from "./components/ProductsSection";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  const getAllProducts = async () => {
    try {
      const res = await fetch("https://storehippo.onrender.com/products/get-all", {
        method: "GET",
      });
      const data = await res.json();
      setProducts(data?.data || []);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <span
        className={`fusion-btn ${
          scrollYPosition > 100 ? "fusion-btn--visible" : ""
        }`}
      >
        request a demo
      </span>
      <Navbar scrollYPosition={scrollYPosition} />
      <Banner />
      <BrandsSection />
      <PortfolioSection />
      <ProductsSection products={products} isLoading={isLoading} />
    </>
  );
}

export default App;
