import { configureStore } from "@reduxjs/toolkit";
import trelloSlice from "../slices"
export default configureStore({
 reducer: {
  trello: trelloSlice, 
 },
});