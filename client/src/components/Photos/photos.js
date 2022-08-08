import React from "react";
import "./photos.css";
function photos({ singlePhoto }) {
  return (
    <div className="sing-div-photo">
      <div>{singlePhoto.photo}</div>
      <div>
        <h1>{singlePhoto.des}</h1>
      </div>
      <div>
        <h3>{singlePhoto.ty}</h3>
      </div>
    </div>
  );
}

export default photos;
