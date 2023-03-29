import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateForm } from "./validateDvd";

export default function DvdCreate() {
  const [errors, setErrors] = useState([]);
  const [dvd, setDvd] = useState({
    title: "",
    releaseYear: "",
    director: "",
    rating: "",
    notes: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setDvd((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm(dvd);
    setErrors(validationErrors);

    if (validationErrors.length > 0) {
      return;
    }

    const response = await fetch(
      "http://dvd-library.us-east-1.elasticbeanstalk.com/dvd",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dvd),
      }
    );
    if (response.ok) {
      navigate("/");
    }
  }

  return (
    <div className="container mx-auto mt-4 px-4">
      <h1 className="text-xl font-bold mb-2 text-indigo-700 uppercase">
        ADD DVD:
      </h1>
      <hr className="border-gray-400" />

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

      <form onSubmit={handleSubmit}>
        {/* Wrap each label and input control pair in a flex container */}
        {/* DVD Title */}
        <div className="flex justify-center items-center my-2">
          <label
            htmlFor="title"
            className="font-bold text-indigo-700 text-right w-1/4 pr-2"
          >
            Title:
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="title"
              name="title"
              value={dvd.title}
              onChange={handleChange}
              className="ml-3 border border-gray-300 rounded-md px-2 py-1 w-1/2"
            />
          </div>
        </div>
        {/* Release Year */}
        <div className="flex justify-center items-center my-2">
          <label
            htmlFor="releaseYear"
            className="font-bold text-indigo-700 text-right w-1/4 pr-2"
          >
            Release Year:
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="releaseYear"
              name="releaseYear"
              value={dvd.releaseYear}
              onChange={handleChange}
              className="ml-3 border border-gray-300 rounded-md px-2 py-1 w-1/2"
            />
          </div>
        </div>
        {/* Director */}
        <div className="flex justify-center items-center my-2">
          <label
            htmlFor="director"
            className="font-bold text-indigo-700 text-right w-1/4 pr-2"
          >
            Director:
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="director"
              name="director"
              value={dvd.director}
              onChange={handleChange}
              className="ml-3 border border-gray-300 rounded-md px-2 py-1 w-1/2"
            />
          </div>
        </div>
        {/* Rating */}
        <div className="flex justify-center items-center my-2">
          <label
            htmlFor="rating"
            className="font-bold text-indigo-700 text-right w-1/4 pr-2"
          >
            Rating:
          </label>
          <div className="w-3/4">
            <select
              id="rating"
              name="rating"
              value={dvd.rating}
              onChange={handleChange}
              className="ml-3 border border-gray-300 rounded-md px-2 py-1 w-1/2"
            >
              <option value="" disabled>
                Select Rating
              </option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
              <option value="NC-17">NC-17</option>
            </select>
          </div>
        </div>
        {/* Notes */}
        <div className="flex justify-center items-center my-2">
          <label
            htmlFor="notes"
            className="font-bold text-indigo-700 text-right w-1/4 pr-2"
          >
            Notes:
          </label>
          <div className="w-3/4">
            <textarea
              id="notes"
              name="notes"
              value={dvd.notes}
              onChange={handleChange}
              className="ml-3 border border-gray-300 rounded-md px-2 py-1 w-1/2"
              rows="5"
            />
          </div>
        </div>
        <div className="flex justify-end items-end my-2 mt-6 w-3/5">
          <button
            type="submit"
            className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
          >
            Save
          </button>
          <Link
            to="/"
            className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
