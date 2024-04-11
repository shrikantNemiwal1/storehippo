import Slider from "react-slick";
import "../css/portfolio.css";

const PortfolioSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="portfolio">
      <h1>Tailor-made enterprise solutions for your brand</h1>
      <h4>Powering Disruptive brands across 40+ industries</h4>
      <Slider {...settings}>
        <div className="slider__slide">
          <img
            className="slide__icon"
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/652fe444c0ce2dfd5b81ee3f/new-project-7-.png"
          />
          <div className="slide__content">
            <div className="slide__text">
              <p>
                Enabling India’s most loved FMCG brand to match pace with the
                changing buying habits of a dynamic nation
              </p>
              <div className="slide__text-grid">
                <div>
                  <h3>Location-based Multi Store</h3>
                  <p>Unique offerings for multiple location-based sub stores</p>
                </div>
                <div>
                  <h3>Location-based Multi Store</h3>
                  <p>Unique offerings for multiple location-based sub stores</p>
                </div>
                <div>
                  <h3>Location-based Multi Store</h3>
                  <p>Unique offerings for multiple location-based sub stores</p>
                </div>
                <div>
                  <h3>Location-based Multi Store</h3>
                  <p>Unique offerings for multiple location-based sub stores</p>
                </div>
              </div>
            </div>
            <img
              className="slide__image"
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/6530e651c0ce2dfd5b959cd2/amul-case-study.png"
            />
          </div>
        </div>
        <div className="slider__slide">
          <img
            className="slide__icon"
            src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/652fe444c0ce2dfd5b81ee3f/new-project-7-.png"
          />
          <div className="slide__content">
            <div className="slide__text">
              <p>
                Enabling India’s most loved FMCG brand to match pace with the
                changing buying habits of a dynamic nation
              </p>
              <div className="slide__text-grid">
                <div>
                  <h3>Location-based Multi Store</h3>
                  <p>Unique offerings for multiple location-based sub stores</p>
                </div>
                <div>
                  <h3>Customizations</h3>
                  <p>
                    Tailor made enterprise customizations for unique brand
                    requirements
                  </p>
                </div>
                <div>
                  <h3>Unparalleled Speed</h3>
                  <p>
                    Creating immersive buyer journeys with speed that fast
                    tracks growth
                  </p>
                </div>
                <div>
                  <h3>Physical Presence</h3>
                  <p>
                    Enabling to create a multi-channel (physical + digital
                    touchpoints) brand presence
                  </p>
                </div>
              </div>
              <span className="slide__link">
                View Site
                <img src="//cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.files/new-home/view-arrow.svg"></img>
              </span>
            </div>
            <img
              className="slide__image"
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/6530e651c0ce2dfd5b959cd2/amul-case-study.png"
            />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default PortfolioSection;
