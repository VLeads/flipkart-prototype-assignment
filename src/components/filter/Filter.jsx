import React from "react";
import { useFilter } from "../../context/filter-context";
import "./Filter.css";

export const Filter = () => {
  const {
    state: { sortByPrice, showBrand, showIdealFor, showSize },
    dispatch,
  } = useFilter();

  const idealForClickHandler = (e) => {
    const checked = e.target.checked;
    const idealFor = e.target.value;
    if (checked) {
      return { type: "SET_IDEALFOR", payload: idealFor.toUpperCase() };
    } else {
      return { type: "UNSET_IDEALFOR", payload: idealFor.toUpperCase() };
    }
  };

  const sizeClickHandler = (e) => {
    const checked = e.target.checked;
    const size = e.target.value;
    if (checked) {
      return { type: "SET_SIZE", payload: size.toUpperCase() };
    } else {
      return { type: "UNSET_SIZE", payload: size.toUpperCase() };
    }
  };

  const brandClickHandler = (e) => {
    const checked = e.target.checked;
    const brand = e.target.value;
    if (checked) {
      return { type: "SET_BRAND", payload: brand.toUpperCase() };
    } else {
      return { type: "UNSET_BRAND", payload: brand.toUpperCase() };
    }
  };

  return (
    <aside className="sidebar_container">
      <div className="sidebar_wrapper">
        <div className="sidebar_heading">
          <p className="filter_header"> Filters</p>
          <p
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "500",
            }}
            onClick={() => dispatch({ type: "RESET_FILTER" })}
          >
            CLEAR ALL
          </p>
        </div>
        <div className="sort_wrapper">
          <div className="filter_heading">Sort</div>
          <ul className="list_wrapper">
            <li className="sort_list-item">
              <label>
                <input
                  type="radio"
                  name="price-sort"
                  onChange={() =>
                    dispatch({ type: "PRICE_SORT", payload: "HIGH_TO_LOW" })
                  }
                  checked={sortByPrice && sortByPrice === "HIGH_TO_LOW"}
                />
                Sort by price high-to-low
              </label>
            </li>
            <li className="sort_list-item">
              <label>
                <input
                  type="radio"
                  name="price-sort"
                  onChange={() =>
                    dispatch({ type: "PRICE_SORT", payload: "LOW_TO_HIGH" })
                  }
                  checked={sortByPrice && sortByPrice === "LOW_TO_HIGH"}
                />
                Sort by price low-to-high
              </label>
            </li>
          </ul>
        </div>
        <div className="idealfor_wrapper">
          <div className="filter_heading">Ideal For</div>
          <ul className="list_wrapper">
            <li className="idealfor_list-item">
              <label>
                <input
                  type="checkbox"
                  value="men"
                  checked={showIdealFor.includes("MEN")}
                  onChange={(e) => dispatch(idealForClickHandler(e))}
                />
                Men
              </label>
            </li>
            <li className="idealfor_list-item">
              <label>
                <input
                  type="checkbox"
                  value="women"
                  checked={showIdealFor.includes("WOMEN")}
                  onChange={(e) => dispatch(idealForClickHandler(e))}
                />
                Women
              </label>
            </li>
            <li className="idealfor_list-item">
              <label>
                <input
                  type="checkbox"
                  value="boys"
                  checked={showIdealFor.includes("BOYS")}
                  onChange={(e) => dispatch(idealForClickHandler(e))}
                />
                Boys
              </label>
            </li>
            <li className="idealfor_list-item">
              <label>
                <input
                  type="checkbox"
                  value="girls"
                  checked={showIdealFor.includes("GIRLS")}
                  onChange={(e) => dispatch(idealForClickHandler(e))}
                />
                Girls
              </label>
            </li>
          </ul>
        </div>
        <div className="size_wrapper">
          <div className="filter_heading">SIZE</div>
          <ul className="list_wrapper">
            <li className="size_list-item">
              <label>
                <input
                  type="checkbox"
                  value="s"
                  checked={showSize.includes("S")}
                  onChange={(e) => dispatch(sizeClickHandler(e))}
                />
                S
              </label>
            </li>
            <li className="size_list-item">
              <label>
                <input
                  type="checkbox"
                  value="m"
                  checked={showSize.includes("M")}
                  onChange={(e) => dispatch(sizeClickHandler(e))}
                />
                M
              </label>
            </li>
            <li className="size_list-item">
              <label>
                <input
                  type="checkbox"
                  value="l"
                  checked={showSize.includes("L")}
                  onChange={(e) => dispatch(sizeClickHandler(e))}
                />
                L
              </label>
            </li>
            <li className="size_list-item">
              <label>
                <input
                  type="checkbox"
                  value="xl"
                  checked={showSize.includes("XL")}
                  onChange={(e) => dispatch(sizeClickHandler(e))}
                />
                XL
              </label>
            </li>
          </ul>
        </div>
        <div className="brand_wrapper">
          <div className="filter_heading">BRANDS</div>
          <ul className="list_wrapper">
            <li className="brand_list-item">
              <label>
                <input
                  type="checkbox"
                  value="arrow"
                  onChange={(e) => dispatch(brandClickHandler(e))}
                  checked={showBrand.includes("ARROW")}
                />
                Arrow
              </label>
            </li>
            <li className="brand_list-item">
              <label>
                <input
                  type="checkbox"
                  value="blackberrys"
                  onChange={(e) => dispatch(brandClickHandler(e))}
                  checked={showBrand.includes("BLACKBERRYS")}
                />
                Blackberrys
              </label>
            </li>
            <li className="brand_list-item">
              <label>
                <input
                  type="checkbox"
                  value="adidas"
                  onChange={(e) => dispatch(brandClickHandler(e))}
                  checked={showBrand.includes("ADIDAS")}
                />
                Adidas
              </label>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};
