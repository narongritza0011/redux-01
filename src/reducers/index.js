import { combineReducers } from "redux";
import { itReducer } from "./itReducer";
import { userReducer } from "./userReducer";

//สำหรับรวม store ที่เอาไว้ใช้
const rootReducer = combineReducers({
  user: userReducer,
  it: itReducer,
});

export default rootReducer;
