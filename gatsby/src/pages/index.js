import React from "react";

import Profile from "../components/profile/profile";
import Github from "../components/social-media/github";
import Linkedin from "../components/social-media/linkedin";

import "./main.css";

const IndexPage = () => (
  <>
    <Profile></Profile>
    <div class="mx-auto flex-col social-media">
      <Github></Github>
      <Linkedin></Linkedin>
    </div>
  </>
);

export default IndexPage;
