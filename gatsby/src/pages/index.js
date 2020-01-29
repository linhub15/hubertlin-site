import React from "react";

import Profile from "../components/profile/profile";
import Github from "../components/social-media/github";
import Linkedin from "../components/social-media/linkedin";

import "./main.css";

const IndexPage = () => (
  <>
    <Profile></Profile>
    <div className="social-media flex-col max-width-sm mx-auto p-1">
      <Github></Github>
      <Linkedin></Linkedin>
    </div>
  </>
);

export default IndexPage;
