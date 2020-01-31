import React from "react";

import profileImg from "./hubert-lin.png";

const Profile = () => (
  <div className="max-width-sm mx-auto p-1">
    <img className="d-block mx-auto" src={profileImg} alt="Photograph of Hubert Lin" />
    <h1 className="text-center">Hubert Lin</h1>
  </div>
);

export default Profile;
