import React from "react";
import logo from "../assets/images/HOWL Color Digital New Breed Logo.png";
function NavigationBar() {
  return (
    <div className="Container">
      <div>
        <img src={logo} className="logo" />
      </div>
      <div className="Option-bar-container">
        <div className="Option-bar"></div>
        <div className="Option-bar mt-6"></div>
      </div>
    </div>
  );
}

export default NavigationBar;
