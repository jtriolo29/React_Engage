import React, { Component } from "react";
import ProductCard from "./ProductCard";
import SortControl from "./SortControl";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Perfume", upvotes: 0, downvotes: 0 },
        { id: 2, name: "Powder", upvotes: 0, downvotes: 0 },
        { id: 3, name: "Scented Soap", upvotes: 0, downvotes: 0 },
        { id: 4, name: "Shampoo", upvotes: 0, downvotes: 0 },
        { id: 5, name: "Bubble Bath", upvotes: 0, downvotes: 0 },
      ].sort(() => Math.random() - 0.5),
    };
  }

  handleSort = (key, order) => {
    const sortedProducts = this.state.products.sort((a, b) => {
      if (order === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });
    this.setState({ products: sortedProducts });
  };

  handleUpvote = (id) => {
    console.log("handleUpvote " + id);
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id
          ? { ...product, upvotes: product.upvotes + 1 }
          : product
      ),
    }));
  };

  handleDownvote = (id) => {
    console.log("handleDownvote " + id);
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === id
          ? { ...product, downvotes: product.downvotes + 1 }
          : product
      ),
    }));
  };

  render() {
    return (
      <div>
        <SortControl handleSort={this.handleSort} />
        {this.state.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleUpvote={this.handleUpvote}
            handleDownvote={this.handleDownvote}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
