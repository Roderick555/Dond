import React from "react";

function PlayerStatus({shares}) {


    return (
      <div>
        <div className="booster-section">
          <div className="booster-header">
            <h2 className="total-shares">{shares}</h2>
            <h4 className="current-level">Level 1</h4>
          </div>
        </div>
      </div>
    );
  }

export default PlayerStatus;