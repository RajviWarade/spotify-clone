import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/card";
import styles from "../Featured/Featured.module.css";
import axios from "axios";

const Featured = () => {
  const [featuredPlaylist, setFeaturedPlaylist] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", config)
      .then((res) => setFeaturedPlaylist(res?.data?.playlists?.items))
      .catch((error) => console.log(error));
  });

  return (
    <Layout>
      <div className={styles.cardContainer}>
        {featuredPlaylist.map((cardData, i) => {
          return (
            <div className={styles.mainContainer} key={i}>
              <Card
                imageSrc={cardData.images[0].url}
                playlistName={cardData.name}
                description={cardData.description}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Featured;
