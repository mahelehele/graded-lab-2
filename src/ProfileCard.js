import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <img src={props.image} alt="Profile" className="profile-image" />
      <h2>{props.name}</h2>
      <h4>{props.title}</h4>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;
