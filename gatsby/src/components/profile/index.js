import React from "react";

import profileImg from "./hubert-lin.png";
import "./profile.css";

const Profile = () => (
  <div className="text-center">
    <img src={profileImg} alt="Photograph of Hubert Lin" />
    <h1>Hubert Lin</h1>
  </div>
);

export default Profile;
