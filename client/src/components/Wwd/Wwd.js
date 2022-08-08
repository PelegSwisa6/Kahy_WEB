import React from "react";
import "../Wwd/Wwd.css";
import face from "../../Kahy_photos/face.jpg";
import flower from "../../Kahy_photos/flower.jpg";
import logo from "../../Kahy_photos/Logo.jpg";
function Wwd() {
  return (
    <div class="main" id="about">
      <div class="main__container">
        <div class="main__img--container">
          <div>
            <img src={face} class="main__img--card" />
            <img src={flower} class="main__img--card" />
            <i class="fas fa-layer-group"></i>
          </div>
        </div>
        <div class="main__content">
          {/* <img src={logo} width="450"  /> */}

          <h1>What do we do?</h1>
          <h2>Take care to find the style that suits you exactly</h2>
          <p>Schedule a call to get more details about us</p>
          <button class="main__btn">
            <a href="https://instagram.com/kahy_7?igshid=YmMyMTA2M2Y=">
              Visit our Instagram
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wwd;
