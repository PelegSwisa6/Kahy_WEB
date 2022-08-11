import React from "react";
import "./CheckOut.css";

function CheckOut(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn1" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default CheckOut;
