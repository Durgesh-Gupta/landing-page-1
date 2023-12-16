import React from "react";
import facebookicon from "../assets/images/icons/facebook.png";
import linkedin from "../assets/images/icons/linkedin.png";
import twitter from "../assets/images/icons/twitter.png";
import instagram from "../assets/images/icons/instagram.png";
import next from "../assets/images/next.png";

function Footer() {
  return (
    <div className="footer-container">
      <img src={facebookicon} className="icon" />
      <img src={twitter} className="icon" />
      <img src={instagram} className="icon" />
      <img src={linkedin} className="icon" />
      <div className="pointer">PRESS</div>
      <div className="pointer"> CAREERS</div>
      <div className="pointer">JOIN THE PACK</div>
      <div
        style={{
          padding: "5px 8px",
          border: "1px solid white",
          display: "flex",
          alignItems: "center",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Sign up to our newsletter
        <img src={next} className="icon" style={{ marginLeft: "20px" }} />
      </div>
      <div style={{ fontSize: "8px" }}>
        All rights reserved Designed, developed & powered by HOWL Digital Agency
      </div>
    </div>
  );
}

export default Footer;
