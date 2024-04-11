import "../css/productCard.css";

const ProductCard = ({
  data: { title, description, price, brand, category, thumbnail },
}) => {
  return (
    <div className="product__card">
      <div className="badge">{brand}</div>
      <div className="product__tumb">
        <img src={thumbnail} alt="" />
      </div>
      <div className="product__details">
        <span className="product__catagory">{category}</span>
        <h4>
          <a href="">{title}</a>
        </h4>
        <p>{description}</p>
        <div className="product__bottom-details">
          <div className="product__price">
            {/* <small>$96.00</small> */}${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
