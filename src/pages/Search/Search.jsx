import React from "react";
import Layout from "../../components/Layout/Layout";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import searchStyles from "../Search/Search.module.css";
import iconStyles from "../Search/Search.module.css";
import inputStyles from "../Search/Search.module.css";

const Search = () => {
  return (
    <Layout>
      <div className={searchStyles.container}>
        <SearchIcon className={iconStyles.icon} />
        <InputBase
          placeholder="Search for artists, music, genres etc..."
          className={inputStyles.input}
        />
      </div>
    </Layout>
  );
};

export default Search;
