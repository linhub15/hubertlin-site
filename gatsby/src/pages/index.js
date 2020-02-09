import React from "react";

import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";
import Github from "../components/social-media/github";
import Linkedin from "../components/social-media/linkedin";

import "./main.css";

const IndexPage = () => (
  <Layout>
    <Profile></Profile>
    <div className="social-media flex-col max-width-sm mx-auto p-1">
      <Github></Github>
      <Linkedin></Linkedin>
      <p>In the process of migrating this site from Jekyll to Gatsby.</p>
    </div>
  </Layout>
);

export default IndexPage;
