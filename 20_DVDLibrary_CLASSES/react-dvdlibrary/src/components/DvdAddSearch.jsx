import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateSearch } from "./validateDvd";

export default function DvdAddSearch({ onSearch }) {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleCreate() {
    navigate("/dvdCreate");
  }

  function handleSearch() {
    const validationErrors = validateSearch(searchCategory, searchTerm);
    setErrors(validationErrors);
    if (validationErrors.length === 0) {
      onSearch(searchCategory, searchTerm);
    }
  }

  return (
    <>
      <div>
        {errors.length > 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <strong className="font-bold">Error:</strong>
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mt-4 mb-4 p-4">
        <button
          onClick={handleCreate}
          className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
        >
          Add DVD
        </button>
        <div className="flex w-1/2">
          <button
            onClick={handleSearch}
            className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
          >
            Search
          </button>
          <select
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="ml-3 border border-gray-300 rounded-md px-2 py-1 w-1/2"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="title">Title</option>
            <option value="year">Release Year</option>
            <option value="director">Director</option>
            <option value="rating">Rating</option>
          </select>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ml-3 border border-gray-300 rounded-md px-2 py-1 w-1/2"
            placeholder="Enter Search Term"
          />
        </div>
       
      </div>
      <hr className="border-gray-300" />
    </>
  );
}
