import React from "react";
import reactImage from "../assets/react.svg";

function Modal() {
  return (
    <div>
  
      <div className="main-body">
        <img src={reactImage} width={100} height={100} />
        <h3 className="booster-name">Boost This Item</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          porro, quasi delectus provident quae non ipsum accusantium nihil culpa
          commodi odit eum voluptatum rerum error itaque dolor ab sit quos.
        </p>
        <button className="confirm-btn">Confirm</button>
      </div>
    </div>
  );
}

export default Modal;
