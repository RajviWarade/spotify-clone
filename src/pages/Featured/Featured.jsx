import React from "react";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/card";
import girlImg from "../../assets/girl.png";
import playmusic from "../../assets/playmusic.png";
import musictable from "../../assets/musictable.png";
import styles from "../Featured/Featured.module.css";

const Featured = () => {
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

export default Featured;
