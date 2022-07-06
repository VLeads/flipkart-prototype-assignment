import React from "react";
import "./ProductPage.css";
import { ProductCard, Filter } from "../../components";
import { useFilter } from "../../context/filter-context";

export const ProductPage = () => {
  const { filteredData } = useFilter();

  return (
    <div className="productpage_container">
      <Filter />
      <div className="products_wrapper">
        <ul className="products_list_wrapper">
          {filteredData?.length !== 0 &&
            filteredData?.map((data) => {
              return (
                <li className="product" key={data._id}>
                  <ProductCard data={data} />
                </li>
              );
            })}
          {filteredData?.length === 0 && (
            <div
              style={{
                margin: "auto",
                fontWeight: "bold",
                fontSize: "2rem",
                color: "red",
              }}
            >
              Sorry, no results found!
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
