import createDataContext from "./createDataContext";
import discogsAPI from "../API/discogs";
import { navigate } from "../navigationRef";

import { config } from "../../config";
import { ActionSheetIOS } from "react-native";

const discogsReducer = (state, action) => {
  switch (action.type) {
    case "barcodeSearch":
      return { errorMessage: "", data: action.payload };
    case "masterIdSearch":
      return { errorMessage: "", data: action.payload };
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const masterIdSearch = (dispatch) => {
  return async (masterId) => {
    try {
      const APIString = "masters/" + masterId;

      const response = await discogsAPI.get(APIString);

      dispatch({ type: "barcodeSearch", payload: response.data });
    } catch (err) {
      console.log(err);

      dispatch({
        type: "add_error",
        payload: "Something went wrong, sign up later",
      });
    }
  };
};

const barcodeSearch = (dispatch) => {
  return async (barcodeNum) => {
    try {
      //console.log(barcodeNum);

      // API call with literal definitions for everything
      // const SIG = `&key=${config.key}&secret=${config.secret}`;
      // console.log(SIG);
      // const requestURL = `https://api.discogs.com/database/search?barcode=${data}${SIG}`;

      // const response = await axios.get(requestURL);

      // call the Discogs API

      const response = await discogsAPI.get("database/search", {
        params: {
          barcode: "6 02537 70731 7",
          key: config.key,
          secret: config.secret,
        },
      });

      // console.log(response.data);

      await dispatch({ type: "barcodeSearch", payload: response.data });
    } catch (err) {
      console.log(err);

      dispatch({
        type: "add_error",
        payload: "Something went wrong, sign up later",
      });
    }
  };
};

// clear the error message on the login screen
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

// call createDataContext with the functions above
// a provider and context are returned
export const { Provider, Context } = createDataContext(
  discogsReducer,
  { barcodeSearch, masterIdSearch, clearErrorMessage },
  { token: null, errorMessage: "" }
);
