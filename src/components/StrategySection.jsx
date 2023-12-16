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
      <div style={{ flex: 2 }} className="sr-container">
        <div className="dotted-parent">
          <div className="dotted-sub-one p-relative">
            Consumer Intel & Behavior Generated
            <div
              className="sub-component p-absolute"
              style={{ top: "-30px", left: "-65px" }}
            >
              Consumer Research
              <br /> & Mapping
            </div>
          </div>
          <div className="dotted-sub-two p-relative">
            <div
              className="sub-component-round p-absolute"
              style={{ top: "-20px", left: "-65px", width: "80px" }}
            >
              Consumer IQ{" "}
            </div>
            <div
              className="sub-component-large p-absolute"
              style={{ bottom: 0, left: "-65px" }}
            >
              <div className="mv-5">Audience Depth</div>
              <div className="mv-5">Interest Segregation</div>
              <div className="mv-5">Consumption Patterns</div>
              <div className="mv-5">Attention Behavior</div>
              <div className="mv-5">Developmental Metrics</div>
              <div className="mv-5">
                Consumer Archetype
                <br />
                Definitions
              </div>
            </div>
          </div>
        </div>

        <div className="dotted-parent">
          <div className="dotted-sub-one p-relative">
            Marketplace & Competition
            <br /> Intel Generated
            <div
              className="sub-component p-absolute"
              style={{ top: "-30px", left: "-65px" }}
            >
              Customer Experience
              <br />
              Study & Strategy
            </div>
          </div>{" "}
          <div className="dotted-sub-two p-relative">
            <div
              className="sub-component-round p-absolute"
              style={{ top: "-30px", left: "-55px" }}
            >
              Marketplace
              <br />
              Data & Research
            </div>
            <div
              className="sub-component-large p-absolute"
              style={{ bottom: 0, left: "-65px" }}
            >
              <div className="mv-5">
                Primary & Secondary
                <br />
                Consumer Research
              </div>
              <div className="mv-5">Competition Mapping Matrix</div>
              <div className="mv-5">
                Customer Experience <br />
                Mission & Vision
              </div>
              <div className="mv-5">Objective Planning</div>
              <div className="mv-5">Success Tenets Definition</div>
            </div>
          </div>
        </div>

        <div className="dotted-parent" style={{ width: "30%" }}>
          <div className="dotted-sub-one p-relative">
            Branding & Key Messaging
            <br />
            Gap Identified
            <div
              className="sub-component p-absolute"
              style={{ top: "-30px", left: "-45px", width: "70px" }}
            >
              Go To Market
              <br />
              Strategy
            </div>
            <div
              className="sub-component p-absolute"
              style={{ top: "-30px", right: "-45px", width: "70px" }}
            >
              Branding
              <br />
              Framework
              <br />
              Establishment
            </div>
          </div>{" "}
          <div className="dotted-sub-two p-relative">
            <div
              className="sub-component-round p-absolute"
              style={{ top: "-30px", left: "-55px" }}
            >
              Product/Service
              <br />
              Category Data
              <br />& Research
            </div>
            <div
              className="sub-component-large p-absolute"
              style={{ bottom: 0, left: "-65px" }}
            >
              <div className="mv-5">Product/Service Qty Growth Mapping</div>
              <div className="mv-5">Budget Planning</div>
              <div className="mv-5">Revenue Projection</div>
              <div className="mv-5">Pricing Decisions</div>
              <div className="mv-5">POS Planning</div>
              <div className="mv-5">Logistics Challenge Mapping</div>
              <div className="mv-5">Operational Outlay Decisions </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategySection;
