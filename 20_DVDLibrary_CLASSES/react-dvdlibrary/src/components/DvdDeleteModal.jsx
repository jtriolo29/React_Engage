import React from "react";

export default function DvdDeleteModal({ open, onClose, onDelete, dvd }) {
  if (!open) return null;

  async function handleDelete() {
    const response = await fetch(
      "http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/" + dvd.id,
      { method: "DELETE" }
    );
    if (response.ok) {
      onDelete(dvd.id);
      onClose();
    }
  }

  return (
    // Outermost tag creates container for modal and positions on top
    <section className="fixed z-10 inset-0 overflow-y-auto">
      {/* responsible for centering modal on screen */}
      <div
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 
        text-center sm:block sm:p-0"
      >
        {/* creates gray background/overlay and allows modal to close when clicked */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          {/* styles the overlay */}
          <div className="absolute inset-0 bg-gray-400 opacity-50"></div>
        </div>
        {/* actual modal box */}
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden 
            shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <header className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 mb-2 font-medium text-indigo-600">
                  {dvd.title}
                </h3>
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Are you sure you want to delete this DVD from your collection?
                </h3>
              </div>
            </div>
          </header>
          <footer className="px-4 py-3 sm:px-6 sm:flex justify-end">
            <button
              type="button"
              className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              type="button"
              className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={onClose}
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </section>
  );
}
