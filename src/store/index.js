import { configureStore } from "@reduxjs/toolkit";
import todoAPI from "../services/todo";

const store = configureStore({
  reducer: {
    [todoAPI.reducerPath]: todoAPI.reducer,
  },
  middleware: (gdm) => gdm().concat(todoAPI.middleware),
});
export default store;
