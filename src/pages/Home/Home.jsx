import React from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.css";
import Navigation from "../../components/Mainbar/Navigation/navigation";
import Section from "../../components/Mainbar/Section/section";
import girlImg from "../../assets/girl.png";
import playmusic from "../../assets/playmusic.png";
import musictable from "../../assets/musictable.png";
import Card from "../../components/Card/card";
import { NavLink } from "react-router-dom";

const Home = () => {
  const data = [
    {
      featuredImg: girlImg,
      playlistName: "Playlist 1",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur at nam, temporibus quis facere reiciendis.",
    },
    {
      featuredImg: playmusic,
      playlistName: "Playlist 2",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur at nam, temporibus quis facere reiciendis.",
    },
    {
      featuredImg: musictable,
      playlistName: "Playlist 3",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur at nam, temporibus quis facere reiciendis.",
    },
  ];

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
          {data.slice(0, 3).map((cardData, i) => {
            return (
              <div className={styles.mainContainer} key={i}>
                <Card
                  imageSrc={cardData.featuredImg}
                  playlistName={cardData.playlistName}
                  description={cardData.desc}
                />
              </div>
            );
          })}
        </div>

        <Section heading="This Week Songs" rightheading="See All" />

        <div className={styles.cardContainer}>
          {data.map((cardData, i) => {
            return (
              <div className={styles.mainContainer} key={i}>
                <Card
                  imageSrc={cardData.featuredImg}
                  playlistName={cardData.playlistName}
                  description={cardData.desc}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
