import "../css/brands.css";

const BrandsSection = () => {
  return (
    <section className="brands">
      <div className="brands__logo">
        <ul>
          <li className="shifted">
            <img
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e540b3825200ec3e98d4c/logo_1-280x280.png"
              alt="amul"
            />
          </li>
          <li>
            <img
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e541f32ee360f4ca90519/logo_2-280x280.png"
              alt="berger"
            />
          </li>
          <li className="shifted">
            <img
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e5431b0863239a92b8315/logo_3-280x280.png"
              alt="momeaze"
            />
          </li>
          <li className="shifted">
            <img
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/652fdc4002b0a2ff20ae7608/logo_7-1-280x280.png"
              alt="dow master connect"
            />
          </li>
          <li>
            <img
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e550535f17f0f1634a49c/logo_4-280x280.png"
              alt="syngenta"
            />
          </li>
          <li className="shifted">
            <img
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/651e553491816d9dd9286f0f/logo_6-280x280.png"
              alt="whites"
            />
          </li>
          <li>
            <img
              src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/657984e0056572ee3696b063/mystore-280x280.png"
              alt="mystore"
            />
          </li>
        </ul>
      </div>
      <div className="brands__text">
        <h2>Empowering Brands Across the Globe</h2>
        <p>
          StoreHippo ecommerce platform builds extraordinary solutions to power
          brands across 15 countries and 30+ industries. Add your brand to the
          long list of brands that trust StoreHippo.
        </p>
      </div>
    </section>
  );
};

export default BrandsSection;
