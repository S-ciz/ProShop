import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <section className="logo">
          <Link to={"/"}>Proshop</Link>
        </section>

        <section className='nav'>
          <Link to={"/cart"}>
            {" "}
            <i className="fa fa-shopping-cart"></i> Cart
          </Link>
          <Link to="/login">
            {" "}
            <i className="fa fa-user"></i> Sign in
          </Link>
        </section>
      </div>
    </header>
  );
};

export default Header;
