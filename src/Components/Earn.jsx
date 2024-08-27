import React from "react";
import PlayerStatus from "./Status";

function Earn() {
  return (
    <div className="earn">
      
      <h1 className="heading">Your Activities</h1>

      <h2>Daily Task</h2>
      <span className="booster-items-line">
        <div className="booster-item">
          <i className="fas fa-fire"></i>
          <div className="boost-item-detail">
            <h5>Visit Our Website</h5>
            <p>4000</p>
          </div>
        </div>
        <div className="booster-item">
          <i className="fas fa-fire"></i>
          <div className="boost-item-detail">
            <h5>Watch Google Ads</h5>
            <p>4000</p>
          </div>
        </div>
        <div className="booster-item">
          <i className="fas fa-fire"></i>
          <div className="boost-item-detail">
            <h5>Visit our blog</h5>
            <p>4000</p>
          </div>
        </div>

        <h2>Weekly Task</h2>
        <span className="booster-items-line">
          <div className="booster-item">
            <i className="fas fa-fire"></i>
            <div className="boost-item-detail">
              <h5>Watch 5 Google Ads</h5>
              <p>4000</p>
            </div>
          </div>
          <div className="booster-item">
            <i className="fas fa-fire"></i>
            <div className="boost-item-detail">
              <h5>Donate to Charity</h5>
              <p>4000</p>
            </div>
          </div>
        </span>

        <h2>Monthly Task</h2>
        <span className="booster-items-line">
          <div className="booster-item">
            <i className="fas fa-fire"></i>
            <div className="boost-item-detail">
              <h5>Open a savings account </h5>
              <p>4000</p>
            </div>
          </div>
        </span>
      </span>
    </div>
  );
}

export default Earn;
