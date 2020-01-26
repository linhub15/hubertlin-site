import React from "react";

import SiteNav from "../components/site-nav/site-nav";
import Profile from "../components/profile/";
import Github from "../components/social-media/github";
import Linkedin from "../components/social-media/linkedin";

const IndexPage = () => (
  <>
    <Profile></Profile>
    <SiteNav></SiteNav>
    <Github></Github>
    <Linkedin></Linkedin>
  </>
);

export default IndexPage;
