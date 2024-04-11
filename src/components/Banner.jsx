import { useEffect } from "react";
import "../css/banner.css";
import TypeWriter from "./Typewriter";

const texts = [
  "Horizontal Marketplaces",
  "B2C Marketplaces",
  "B2B2C Marketplaces",
  "Hyperlocal Marketplaces",
  "Multi Country Marketplaces",
  "Multi Brand Marketplaces",
  "Multilingual Marketplaces",
  "Vertical Marketplaces",
];

const Banner = () => {
  useEffect(() => {});

  return (
    <section className="banner">
      <div className="banner__text">
        <h1>Leading Enterprise Ecommerce Platform in India</h1>
        <h3>
          Build whitelabelled{" "}
          <span className="text__primary">
            <TypeWriter data={texts} />
          </span>
          <span className="text__primary blinking-cursor">|</span>
        </h3>
        <p>Designed for diverse B2B and B2C business models</p>
        <button className="btn-primary">Schedule a demo</button>
      </div>
      <div className="banner__image">
        <img src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657809dbbcebf27febe432cc/ecommerce-banner.png" />
      </div>
    </section>
  );
};

export default Banner;
