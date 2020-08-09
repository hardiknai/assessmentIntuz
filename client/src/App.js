import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ProductList from "./containers/ProductList";

function App() {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
}

export default App;
