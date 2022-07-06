import { useState, useReducer, useContext, createContext } from "react";
import { productsData } from "../data/products.data";
import { filterReducer, initialState } from "./reducers";
import { getNumberFromFormattedPrice } from "../utils/functions";
const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  function getPriceSortedData(productList, sortByPrice) {
    if (sortByPrice && sortByPrice === "HIGH_TO_LOW") {
      return productList?.sort(
        (a, b) =>
          getNumberFromFormattedPrice(b.price["ourPrice"]) -
          getNumberFromFormattedPrice(a.price["ourPrice"])
      );
    }
    if (sortByPrice && sortByPrice === "LOW_TO_HIGH") {
      return productList?.sort(
        (a, b) =>
          getNumberFromFormattedPrice(a.price["ourPrice"]) -
          getNumberFromFormattedPrice(b.price["ourPrice"])
      );
    }
    return productList;
  }

  function getIdealForData(productList, data) {
    return data?.length === 0
      ? productList
      : productList?.filter((item) =>
          data?.some(
            (selectedIdealFor) =>
              selectedIdealFor === item?.idealFor.toUpperCase()
          )
        );
  }

  function getSizeData(productList, data) {
    return data?.length === 0
      ? productList
      : productList?.filter((item) =>
          data?.some(
            (selectedSize) => selectedSize === item?.size.toUpperCase()
          )
        );
  }
  function getBrandData(productList, data) {
    console.log("prod", productList);
    return data?.length === 0
      ? productList
      : productList?.filter((item) =>
          data?.some(
            (selectedBrand) => selectedBrand === item?.brand.toUpperCase()
          )
        );
  }

  const priceSortedData = getPriceSortedData(
    productsData.products,
    state?.sortByPrice
  );

  const idealForData = getIdealForData(priceSortedData, state?.showIdealFor);

  const sizeData = getSizeData(idealForData, state?.showSize);

  const filteredData = getBrandData(sizeData, state?.showBrand);

  //   ideafor, size, brand

  return (
    <FilterContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
