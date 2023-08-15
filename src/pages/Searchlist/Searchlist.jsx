import React from "react";
import Layout from "../../components/Layout/Layout";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import arrahman from "../../assets/arrahman.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import styles from "../Searchlist/Searchlist.module.css";

const Searchlist = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <SearchIcon className={styles.icon} />
          <InputBase
            placeholder="Search for artists, music, genres etc..."
            className={styles.input}
          />
        </div>

        <div className={styles.gap}>
          <h1>Top Results</h1>
          <img src={arrahman} className={styles.image} />
          <h1>Songs</h1>

          <div className={styles.itemContainer}>
            <div className={styles.details}>
              <Avatar
                variant="square"
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <div>
                <h4>Song Name</h4>
                <h6>Artist Name</h6>
              </div>
            </div>

            <p className={styles.listnum}>4.16</p>
            <PlayArrowIcon className={styles.listicon} />
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.details}>
              <Avatar
                variant="square"
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <div>
                <h4>Song Name</h4>
                <h6>Artist Name</h6>
              </div>
            </div>

            <p className={styles.listnum}>4.16</p>
            <PlayArrowIcon className={styles.listicon} />
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.details}>
              <Avatar
                variant="square"
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <div>
                <h4>Song Name</h4>
                <h6>Artist Name</h6>
              </div>
            </div>

            <p className={styles.listnum}>4.16</p>
            <PlayArrowIcon className={styles.listicon} />
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.details}>
              <Avatar
                variant="square"
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <div>
                <h4>Song Name</h4>
                <h6>Artist Name</h6>
              </div>
            </div>

            <p className={styles.listnum}>4.16</p>
            <PlayArrowIcon className={styles.listicon} />
          </div>

          <div className={styles.itemContainer}>
            <div className={styles.details}>
              <Avatar
                variant="square"
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <div>
                <h4>Song Name</h4>
                <h6>Artist Name</h6>
              </div>
            </div>

            <p className={styles.listnum}>4.16</p>
            <PlayArrowIcon className={styles.listicon} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Searchlist;
