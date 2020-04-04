// export default function (state = {}, action) {
//   switch(action.type) {
//     default:
//       return state;
//   }
// }
import apiReducer from "./api";
import { combineReducers } from "redux";

export default combineReducers({
  api: apiReducer,
});
