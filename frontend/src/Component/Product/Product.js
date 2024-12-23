import "./product.css";

import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";
const Product = ({ product }) => {
  return (
    <Link to={"/product/" + product._id }>
    <div className="product">
      <div className="product_card">
        <section className="card_img">
          <img src={product.image} alt={product.name} />
        </section>

        <section className="card_title">
          <h2> {product.name} </h2>
        </section>
        <section className="card_review">
          <Rating
            rate={parseFloat(product.rating)}
            text={product.numReviews + " reviews"}
          />
        </section>

        <section className="card_price">
          <h1>${product.price} </h1>
        </section>
      </div>
    </div>
    </Link>
  );
};

export default Product;
