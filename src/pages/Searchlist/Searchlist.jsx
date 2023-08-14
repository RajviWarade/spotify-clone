import React from "react";
import Layout from "../../components/Layout/Layout";
import searchStyles from "../Searchlist/Searchlist.module.css";
import iconStyles from "../Searchlist/Searchlist.module.css";
import inputStyles from "../Searchlist/Searchlist.module.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import arrahman from "../../assets/arrahman.png";
import imageStyles from "../Searchlist/Searchlist.module.css";
import gapStyles from "../Searchlist/Searchlist.module.css";
import musicStyles from "../Searchlist/Searchlist.module.css";
import itemsStyles from "../Searchlist/Searchlist.module.css";
import listiconStyles from "../Searchlist/Searchlist.module.css";
import listnumStyles from "../Searchlist/Searchlist.module.css";
import Avatar from "@mui/material/Avatar";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Searchlist = () => {
  return (
    <>
      <Layout>
        <div className={searchStyles.container}>
          <SearchIcon className={iconStyles.icon} />
          <InputBase
            placeholder="Search for artists, music, genres etc..."
            className={inputStyles.input}
          />
        </div>

        <div className={gapStyles.gap}>
          <h1>Top Results</h1>
          <img src={arrahman} className={imageStyles.image} />
          <h1>Songs</h1>

          <div className={itemsStyles.itemContainer}>
            <div className={musicStyles.details}>
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

            <p className={listnumStyles.listnum}>4.16</p>
            <PlayArrowIcon className={listiconStyles.listicon} />
          </div>

          <div className={itemsStyles.itemContainer}>
            <div className={musicStyles.details}>
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

            <p className={listnumStyles.listnum}>4.16</p>
            <PlayArrowIcon className={listiconStyles.listicon} />
          </div>

          <div className={itemsStyles.itemContainer}>
            <div className={musicStyles.details}>
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

            <p className={listnumStyles.listnum}>4.16</p>
            <PlayArrowIcon className={listiconStyles.listicon} />
          </div>

          <div className={itemsStyles.itemContainer}>
            <div className={musicStyles.details}>
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

            <p className={listnumStyles.listnum}>4.16</p>
            <PlayArrowIcon className={listiconStyles.listicon} />
          </div>

          <div className={itemsStyles.itemContainer}>
            <div className={musicStyles.details}>
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

            <p className={listnumStyles.listnum}>4.16</p>
            <PlayArrowIcon className={listiconStyles.listicon} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Searchlist;
