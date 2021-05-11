import React from "react";

import "./Home.css";
import Header from "../../components/Header";
import SearchField from "../../components/SearchField";

const Home = () => {
  return (
    <>
      <div className="background-style">
        <Header />
        <div className="search-field-container">
          <SearchField />
        </div>
      </div>
    </>
  );
};

export default Home;
