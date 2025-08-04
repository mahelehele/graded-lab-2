import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="card-container">
        <ProfileCard
          name="Wamashudu Mahex"
          title="CEO & Founder"
          image="https://www.w3schools.com/howto/img_avatar2.png"
          bio="mahex.dev@company.com |Building teams that build tech "
        />
        <ProfileCard
          name="Omphulusa Mahex"
          title="Lead Developer"
          image="https://www.w3schools.com/howto/img_avatar.png"
          bio=" mahex.omphulusa@gmail.com| Passionate about clean UI and frontend magic"
        />
      </div>
    </div>
  );
}

export default App;
