import { combineReducers } from "redux";
import logincheck from "./loginCheck";
import special from "./special";

//루트 리듀서  여러개 상태관리(모듈 하나로 합치기)
const rootReducer = combineReducers({special, logincheck});

export default rootReducer;