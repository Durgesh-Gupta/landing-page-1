import React from "react";

function StrategySection() {
  return (
    <div className="bg-container">
      <div style={{ flex: 1 }}>
        <ul>
          <>
            <li className="li-first">STRATEGY AND CONSULTING</li>
            <li>ONLINE MARKETING EXPERIENCES</li>
            <li>COMMERCE SOLUTIONS</li>
            <li>GROWTH MARKETING</li>
            <li>ASSET CREATION</li>
          </>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginTop: "10%",
            }}
          >
            <div
              className="light-border"
              style={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <div className="layer-outline">
                Layer 1-Strategic Process Steps
              </div>
              <div className="layer-outline second">
                Layer 2-Inputs & Intel Undertaken{" "}
              </div>
              <div className="layer-outline third">
                Layer 3-Strategic Output{" "}
              </div>
              <div className="layer-outline forth">
                Layer 4 - Branding Headers{" "}
              </div>
              <div className="layer-outline fifth">Layer 5-Branding Output</div>
            </div>
          </div>
        </ul>
      </div>
      <div style={{ flex: 2 }}> hellow</div>
    </div>
  );
}

export default StrategySection;
