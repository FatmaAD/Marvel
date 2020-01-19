import config from "../constants/config";
import { GET_COMICS } from "./actions";
import axios from "axios";

//api handlers used in the app
export const getComic = () => dispatch => {
  axios
    .get(config.request.url + "/v1/public/comics", {
      params: {
        apikey: config.request.apikey,
        ts: config.request.ts,
        hash: config.request.hash
      }
    })
    .then(res => {
      dispatch({ type: GET_COMICS, payload: res.data.data.results });
    });
};
