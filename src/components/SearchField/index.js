import React, { useState } from "react";

import { SearchService } from "../../helpers/SearchService";

import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { useStyles } from "./style";

const SearchField = (props) => {
  const [search, setSearch] = useState("");
  const tweet = props;

  const styleClass = useStyles();

  const onSearch = (e) => {
    e.preventDefault();
    SearchService(tweet);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <div className={styleClass.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search…"
          classes={{
            root: styleClass.inputRoot,
            input: styleClass.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </form>
    </div>
  );
};

export default SearchField;
