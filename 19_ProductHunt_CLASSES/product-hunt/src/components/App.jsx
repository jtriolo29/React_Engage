import React, { Component } from "react";
import "./App.css";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <div className="flex justify-center my-6">
        <ProductList />
      </div>
    );
  }
}

export default App;
