import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DvdAddSearch from "./DvdAddSearch";
import DvdDeleteModal from "./DvdDeleteModal";

export default function DvdList() {
  const [dvds, setDvds] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedDvd, setSelectedDvd] = useState([]);
  const navigate = useNavigate();
  const apiUrl = "http://dvd-library.us-east-1.elasticbeanstalk.com/dvds";

  useEffect(() => {
    fetchDvdData();
  }, []);

  async function fetchDvdData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    setDvds(data);
  }

  async function handleSearch(searchCategory, searchTerm) {
    let url = apiUrl;
    if (searchCategory && searchTerm) {
      url = apiUrl + "/" + searchCategory + "/" + searchTerm;
    }
    const response = await fetch(url);
    const data = await response.json();
    setDvds(data);
  }

  function handleEdit(id) {
    navigate("/dvdEdit/" + id);
  }

  function handleDeleteButtonClick(dvd) {
    setSelectedDvd(dvd);
    setDeleteModalOpen(true);
  }

  function handleDelete(id) {
    setDvds(dvds.filter((dvd) => dvd.id !== id));
  }

  function handleCloseModal() {
    setDeleteModalOpen(false);
    setSelectedDvd(null);
  }

  return (
    <div className="container mx-auto mt-4">
      <DvdAddSearch onSearch={handleSearch} />
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-lg font-bold text-indigo-700 uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-left text-lg font-bold text-indigo-700 uppercase">
              Release Year
            </th>
            <th className="px-6 py-3 text-left text-lg font-bold text-indigo-700 uppercase">
              Director
            </th>
            <th className="px-6 py-3 text-left text-lg font-bold text-indigo-700 uppercase">
              Rating
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {dvds.map((dvd) => (
            <tr key={dvd.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <Link to={`/dvd/${dvd.id}`}>{dvd.title}</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dvd.releaseYear}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dvd.director}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {dvd.rating}
              </td>
              <td>
                <button
                  onClick={() => handleEdit(dvd.id)}
                  className="text-indigo-300 hover:text-indigo-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteButtonClick(dvd)}
                  className="ml-4 text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DvdDeleteModal
        open={deleteModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDelete}
        dvd={selectedDvd}
      />
    </div>
  );
}
