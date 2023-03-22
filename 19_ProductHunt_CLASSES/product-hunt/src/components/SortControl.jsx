import React, { Component } from "react";

class SortControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "",
      sortOrder: "",
    };
  }

  handleSortByChange = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  handleSortOrderChange = (event) => {
    this.setState({ sortOrder: event.target.value });
  };

  render() {
    const { handleSort } = this.props;
    const { sortBy, sortOrder } = this.state;
    const isSortButtonDisabled = !sortBy || !sortOrder;

    return (
      <div className="flex items-center space-x-2 mb-4">
        <label htmlFor="sort-by" className="font-medium">
          Sort by:
        </label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={this.handleSortByChange}
          className="border-2 border-blue-300 rounded-md px-2 py-1"
        >
          <option value="">--Select--</option>
          <option value="upvotes">Upvotes</option>
          <option value="downvotes">Downvotes</option>
          <option value="name">Product Name</option>
        </select>
        <label htmlFor="sort-order" className="font-medium">
          Order:
        </label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={this.handleSortOrderChange}
          className="border-2 border-blue-300 rounded-md px-2 py-1"
        >
          <option value="">--Select--</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button
          onClick={() => handleSort(sortBy, sortOrder)}
          className={`bg-blue-500 text-white font-semibold px-4 py-2 rounded-md 
            shadow-md hover:bg-blue-600 
              ${isSortButtonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={isSortButtonDisabled}
        >
          Sort
        </button>
      </div>
    );
  }
}
export default SortControl;
