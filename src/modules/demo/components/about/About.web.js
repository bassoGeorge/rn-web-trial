import React from "react";
import { AboutContainerGen } from "./about.container";
import { Link } from "react-router-dom";

export function AboutComponent({ title, subTitle }) {
  return (
    <div
      css={`
        padding: 30px;
      `}
    >
      <h1
        css={`
          font-size: 20px;
          color: blue;
        `}
      >
        {title} | About Page
      </h1>
      <p>Some more text just to try out | {subTitle}</p>
      <Link to={"/details?name=Ajeeb&id=blah"}>Deep link</Link>
    </div>
  );
}

export const About = AboutContainerGen(AboutComponent);
export default About;
