import React, { Component } from "react";
import arrowUpward from "../images/arrow_upward.png";
import arrowDownward from "../images/arrow_downward.png";

class ProductCard extends Component {
  render() {
    const { product, handleUpvote, handleDownvote } = this.props;
    return (
      <div className="p-4 bg-white border-2 border-blue-300 rounded-md my-2">
        <h3 className="text-xl font-semibold mb-2 text-center">
          {product.name}
        </h3>
        <div className="flex justify-between">
          <p className="mb-1">Upvotes: {product.upvotes}</p>
          <button
            className="bg-transparent p-1"
            onClick={() => handleUpvote(product.id)}
          >
            <img src={arrowUpward} alt="Upvote" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-between">
          <p className="mb-2">Downvotes: {product.downvotes}</p>
          <button
            className="bg-transparent p-1"
            onClick={() => handleDownvote(product.id)}
          >
            <img src={arrowDownward} alt="Downvote" className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
