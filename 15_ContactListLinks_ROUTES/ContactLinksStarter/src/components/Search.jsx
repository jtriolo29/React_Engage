import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Contact from "./Contact";
import useFetch from "../hooks/useFetch";

function Search() {
  const [usersSearch, setUsersSearch] = useState("");
  const [userHasSearched, setUserHasSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  let url = `http://contactlist.us-east-1.elasticbeanstalk.com/contacts`;
  const [contactData] = useFetch(url);

  function filterContactData(searchTerm) {
    setUserHasSearched(true);
    setUsersSearch(searchTerm);

    let filteredResults;

    if (searchTerm == "") {
      filteredResults = [];
      setUserHasSearched(false);
    } else {
      filteredResults = contactData.filter((contact) => {
        return (
          contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
    }

    setSearchResults(filteredResults);
  }

  return (
    <div>
      <nav className="w-full flex justify-end mt-8">
        <Link
          to="/create"
          className="w-11/12 m-auto lg:w-1/6 text-center text-lg py-4 px-6 rounded-full 
            border-2 lg:mr-16 text-gray-100 border-green-600 bg-green-600 
            hover:bg-gray-50 hover:border-green-600  hover:text-green-600 hover:shadow-2xl"
        >
          Add Contact
        </Link>
      </nav>

      <SearchBar
        searchValue={usersSearch}
        searchValueFunction={filterContactData}
      />

      <section className="flex justify-center my-4">
        {userHasSearched ? (
          <>
            <div
              className={
                searchResults.length > 0
                  ? "hidden"
                  : "bg-red-100 border border-red-400 text-red-700 md:w-2/5 lg:max-w-md px-4 py-3 rounded-md"
              }
              role="alert"
            >
              <p className="text-center">
                <strong>Sorry!</strong> There are no contacts with the name of{" "}
                <strong>{usersSearch}</strong>
              </p>
            </div>
            <div
              className={
                searchResults.length > 0
                  ? "grid grid-cols-3 gap-2 place-items-center"
                  : "hidden"
              }
            >
              {searchResults.map((contact) => {
                return (
                  <Link to={`/${contact.contactId}`} key={contact.contactId}>
                    <Contact
                      name={`${contact.firstName} ${contact.lastName}`}
                      telNumber={contact.phone}
                      email={contact.email}
                    />
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-3 gap-2 place-items-center">
            {contactData.map((contact) => {
              return (
                <Link to={`${contact.contactId}`} key={contact.contactId}>
                  <Contact
                    name={`${contact.firstName} ${contact.lastName}`}
                    telNumber={contact.phone}
                    email={contact.email}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Search;
