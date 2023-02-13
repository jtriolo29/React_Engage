import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Search() {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <div>
      <SearchBar
        searchValue={usersSearch}
        searchValueFunction={setUsersSearch}
      />
      <p>You searched for {usersSearch}</p>
    </div>
  );
}
