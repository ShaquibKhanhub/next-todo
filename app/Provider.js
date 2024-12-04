"use client";

import { Provider } from "react-redux";
import { store } from "../store/todo";

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
