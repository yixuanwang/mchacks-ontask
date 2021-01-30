import React from "react";
import PopupChat from "./components/Popup";

const Home = () => {
  return (
    <React.Fragment>
      <div style={{ padding: "2%" }}>
        <h1 id="popup-title">
          <i className="fas fa-dragon"></i> OnTask
        </h1>
        <div class="ui divider"></div>
        <PopupChat />
      </div>
    </React.Fragment>
  );
};

export default Home;
