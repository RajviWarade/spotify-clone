import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.css";
import Navigation from "../../components/Mainbar/Navigation/navigation";
import Section from "../../components/Mainbar/Section/section";
import Card from "../../components/Card/card";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [weekSongs, setWeekSongs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", config)
      .then((res) => {
        setFeaturedPlaylists(res?.data?.playlists?.items);
      })
      .catch((err) => console.log(err));

    axios
      .get(
        "https://api.spotify.com/v1/search?q=week&type=track%2Calbum",
        config
      )
      .then((res) => setWeekSongs(res.data.albums.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Layout>
        <Navigation />
        <Section
          heading="Featured Playlist"
          rightheading={
            <NavLink to="/featured-playlist" className={styles.headingtwo}>
              See All
            </NavLink>
          }
        />
        <div className={styles.cardContainer}>
          {featuredPlaylists.slice(0, 4).map((playlist, i) => {
            return (
              <div className={styles.mainContainer} key={i}>
                <Card
                  key={playlist.id}
                  imageSrc={playlist?.images[0]?.url}
                  playlistName={playlist?.name}
                  description={playlist?.description}
                />
              </div>
            );
          })}
        </div>

        <Section heading="This Week Songs" rightheading="See All" />

        <div className={styles.cardContainer}>
          {weekSongs.slice(0, 4).map((cardData, i) => {
            return (
              <Card
                key={cardData.id}
                imageSrc={cardData.images[0].url}
                playlistName={cardData.name}
                description={cardData.artists[0].name}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
