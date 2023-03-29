import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function DvdDetail() {
  const [dvd, setDvd] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchDvdData(id);
  }, [id]);

  async function fetchDvdData(id) {
    const response = await fetch(
      "http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/" + id
    );
    const data = await response.json();
    setDvd(data);
  }

  return (
    <div className="container mx-auto mt-4 px-4">
      <h1 className="text-xl font-bold mb-4 text-indigo-700 uppercase">
        {dvd.title}
      </h1>
      <hr className="border-gray-400" />
      <div className="mt-4 space-y-4">
        <p className="text-lg">
          <span className="font-bold text-indigo-700">Release Year: </span>
          <span className="ml-3 text-gray-600">{dvd.releaseYear}</span>
        </p>
        <p className="text-lg">
          <span className="font-bold text-indigo-700">Director: </span>
          <span className="ml-3 text-gray-600">{dvd.director}</span>
        </p>
        <p className="text-lg">
          <span className="font-bold text-indigo-700">Rating: </span>
          <span className="ml-3 text-gray-600">{dvd.rating}</span>
        </p>
        <p className="text-lg">
          <span className="font-bold text-indigo-700">Notes: </span>
          <span className="ml-3 text-gray-600">{dvd.notes}</span>
        </p>
      </div>
      <div className="mt-12">
        <Link
          to="/"
          className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
