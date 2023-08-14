import React from "react";
import mainstyles from "../../pages/Home/Home.module.css";
import sectionstyles from "../Mainbar/section.module.css";

const section = ({ heading, rightheading }) => {
  return (
    <div className={mainstyles.mainContainer}>
      <h2 className={sectionstyles.heading}>{heading}</h2>
      <h3 className={sectionstyles.headingtwo}>{rightheading}</h3>
    </div>
  );
};

export default section;
