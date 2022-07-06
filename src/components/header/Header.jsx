import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header_container">
      <div className="header_wrapper">
        <div style={{ fontSize: "3rem", fontWeight: "600" }}>
          <i>Flipkart</i>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search for products, brands and more"
            className="search"
          />
        </div>
        <div>
          <button>Login</button>
        </div>
        <div className="option">Cart</div>
      </div>
    </div>
  );
};
