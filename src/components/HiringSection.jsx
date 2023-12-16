import React from "react";
import NextIcon from "../assets/images/next.png";
import thirdsample from "../assets/images/three.jpg";

function HiringSection() {
  return (
    <div className="hiringContainer">
      <div className="subText">
        Keep track
        <br />
        of the wolves
        <img
          src={NextIcon}
          style={{ width: "40px", height: "30px", color: "black" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={thirdsample} className="squareImage" />
        <div
          className="squareImage center"
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "bold",
            margin:'0 15px'
          }}
        >
          we're
          <br />
          hiring!
        </div>
        <img src={thirdsample} className="squareImage" />
      </div>
    </div>
  );
}

export default HiringSection;
