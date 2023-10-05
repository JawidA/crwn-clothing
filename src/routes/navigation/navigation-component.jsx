import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation-style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>LOGO</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link shop" to="shop">
            Shop
          </Link>
          <Link className="nav-link shop" to="sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
