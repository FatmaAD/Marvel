import * as actionTypes from "./actions";
const initialState = {
  comics: []
};
const reducer = (state = initialState, action) =>  {
  switch (action.type) {
    case actionTypes.GET_COMICS:
      return { ...state, comics: action.payload };
    default:
      return state;
  }
};
export default reducer;
