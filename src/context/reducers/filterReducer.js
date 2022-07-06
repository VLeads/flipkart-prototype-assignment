export const initialState = {
  sortByPrice: "",
  showBrand: [],
  showIdealFor: [],
  showSize: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE_SORT":
      return { ...state, sortByPrice: action.payload };

    case "SET_IDEALFOR":
      return {
        ...state,
        showIdealFor: [...state.showIdealFor, action.payload],
      };

    case "UNSET_IDEALFOR":
      return {
        ...state,
        showIdealFor: state.showIdealFor.filter(
          (item) => item !== action.payload
        ),
      };

    case "SET_BRAND":
      return {
        ...state,
        showBrand: [...state.showBrand, action.payload],
      };

    case "UNSET_BRAND":
      return {
        ...state,
        showBrand: state.showBrand.filter((item) => item !== action.payload),
      };

    case "SET_SIZE":
      return {
        ...state,
        showSize: [...state.showSize, action.payload],
      };

    case "UNSET_SIZE":
      return {
        ...state,
        showSize: state.showSize.filter((item) => item !== action.payload),
      };

    case "RESET_FILTER":
      return {
        sortByPrice: null,
        showBrand: [],
        showIdealFor: [],
        showSize: [],
      };

    default:
      return state;
  }
};
