import React from "react";
import sampleImageone from "../assets/images/one.jpg";
import sampleImagetwo from "../assets/images/two.jpg";
import sampleImagethree from "../assets/images/three.jpg";

function ClientSection() {
  return (
    <div className="client-center">
      <div className="heading">Clients we work with</div>
      <div className="imageContainer">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((simp, i) => (
          <img
            src={i % 2 === 0 ? sampleImageone : sampleImagethree}
            className="clientimg"
          />
        ))}
      </div>
    </div>
  );
}

export default ClientSection;
