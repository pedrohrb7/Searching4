import React, { useState } from "react";

import { SearchService } from "../../helpers/SearchService";

import "./SearchField.css";

const SearchField = () => {
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Valor pesquisado > " + search);
    // (****************************)
    SearchService(search);

    // (****************************)
    setLoading(false);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="search-field"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchField;
