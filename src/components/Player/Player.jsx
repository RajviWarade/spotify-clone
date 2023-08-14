import React from "react";
import styles from "./Player.module.css";
import Avatar from "@mui/material/Avatar";
import playerStyles from "../Player/Player.module.css";
import musicStyles from "../Player/Player.module.css";
import playmusicstyles from "../Player/Player.module.css";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import LineStyles from "../Player/Player.module.css";
import searchStyles from "../Player/Player.module.css";

const Player = () => {
  return (
    <div className={styles.player}>
      <div className={playerStyles.container}>
        <div className={musicStyles.details}>
          <Avatar
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
            <h4>Song Name</h4>
            <h6>Artist Name</h6>
          </div>
        </div>

        <div>
          <SkipPreviousIcon />
          <PlayArrowIcon />
          <SkipNextIcon />
        </div>

        <div className={playmusicstyles.playmusic}>
          <p>2.15</p>

          <Box width={900}>
            <Slider className={LineStyles.sliderline} />
          </Box>

          <p>4.25</p>
        </div>

        <VolumeUpOutlinedIcon className={searchStyles.search} />
      </div>
    </div>
  );
};

export default Player;
