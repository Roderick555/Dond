import React, { useState } from "react";
import coinImage from "../assets/react.svg";
import PlayerStatus from "./Status";

function Home() {
  const [share, setShare] = useState(1000);
  const deductions = 1;
  const [potentialEarnings, setPotentialEarnings] = useState(100);
  const [maxEarningsValue, setMaxEarningsValue] = useState(1000);

  return (
    <div className="homepage">
      <PlayerStatus shares={share} />
      <div className="main">
        <a href="/earn">
          <button className="home-links">Daily</button>
        </a>
        <div className="coin-section">
          <div className="image-container">
            <div className="tap-item-container">
              <div
                className="parent"
                onClick={() => {
                  if (potentialEarnings > 0) {
                    setShare((share) => share + deductions);
                    setPotentialEarnings(
                      (potentialEarnings) => potentialEarnings - deductions
                    );
                  }
                }}>
                <div className="child">
                  <h3 className="instruction-text">Tap Me</h3>
                </div>
              </div>
            </div>
          </div>

          <progress
            value={potentialEarnings}
            max={maxEarningsValue}
            className="progress-bar"
          />
          <h3>
            {potentialEarnings}/{maxEarningsValue}
          </h3>
        </div>

        <a href="/boost">
          <button className="home-links">Boosts</button>
        </a>

      </div>
    </div>
  );
}

export default Home;
