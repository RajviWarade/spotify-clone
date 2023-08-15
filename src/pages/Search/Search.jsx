import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./Search.module.css";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

const Search = () => {
  const [userSearch, setUserSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(
        `https://api.spotify.com/v1/search?q=${e.target.value}&type=album%2Cplaylist`,
        config
      )
      .then((res) => {
        console.log(res.data.playlists.items);
        setUserSearch(res.data.playlists.items);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Layout>
      <div className={styles.container}>
        <SearchIcon className={styles.icon} />
        <InputBase
          placeholder="Search for artists, music, genres etc..."
          className={styles.input}
          onChange={handleSearch}
        />
      </div>
      {searchTerm ? (
        <>
          <div className={styles.gap}>
            <h1>Top Results</h1>

            <div className={styles.topResultsContainer}>
              {userSearch.slice(0, 3).map((user, i) => (
                <img src={user.images[0].url} className={styles.image} />
              ))}
            </div>

            <h1>Songs</h1>

            {userSearch.slice(0, 5).map((user, i) => {
              return (
                <>
                  <div className={styles.itemContainer}>
                    <div className={styles.details}>
                      <Avatar
                        variant="square"
                        alt="Cindy Baker"
                        src={user.images[0].url}
                      />
                      <div>
                        <h4>{user.name}</h4>
                        <h6>{user.type}</h6>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <div className={styles.stylish}>
          <p>
            <span>"Tune In to Your Favorites:</span> <br /> Your Melody, Your
            Way"
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Search;
