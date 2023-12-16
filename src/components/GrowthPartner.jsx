import React from "react";
import GPartnerImg from "../assets/images/growthpartner.jpg";

function GrowthPartner() {
  return (
    <div className="Container-center">
      <div className="gp-text-container w-100">
        <div style={{ width: "50%" }}>
          We exist because we want to help you navigate
          <br /> and harness the potential of this ever-changing
          <br /> digital landscape.
        </div>
      </div>
      <div className="d-row f-center  w-100">
        <div className="heading-text p-relative" style={{ width: "50%" }}>
          Your
          <br /> Growth
          <br /> Partners
          <img
            src={GPartnerImg}
            alt="image"
            className="gpimage p-absolute"
            style={{ left: "165px", top: "-70px" }}
          />
        </div>
      </div>
      <div
        className="gp-text-container "
        style={{
          marginTop: "50px",
        }}
      >
        It's not a game of guesses, it's a game of numbers where growth is the
        <br />
        ultimate goal. We leverage cutting-edge technology and data-driven
        <br />
        insights to help you answer questions that unlock growth.
      </div>
    </div>
  );
}

export default GrowthPartner;
