import React from "react";
import Layout from "../../components/Layout/Layout";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "../Search/Search.module.css";

const Search = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <SearchIcon className={styles.icon} />
        <InputBase
          placeholder="Search for artists, music, genres etc..."
          className={styles.input}
        />
      </div>
    </Layout>
  );
};

export default Search;
