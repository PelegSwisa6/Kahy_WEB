import React from "react";
import "../../components//Services/Services.css";
import black from "../../Kahy_photos/Black.jpg";
import white from "../../Kahy_photos/White.jpg";
import jewel from "../../Kahy_photos/Jewel.jpg";
function Services() {
  return (
    <body className="main-body">
      <button class="main__btn">
        <a href="http://localhost:3000/products">SHOP NOW!</a>
      </button>
      <div class="body">
        <div class="services" id="services"></div>
        <div class="services__photos">
          <img src={black} alt="" width="200" class="services__photos1" />
          <img src={white} alt="" width="200" class="services__photos1" />
          <img src={jewel} alt="" width="200" class="services__photos1" />

          <div class="services__wrapper">
            <div class="services__card">
              <h1>Elegant style in white</h1>
              <p class="card2">White shirts</p>
              <div class="services__btn"></div>
              <div class="services__btn"></div>
            </div>
            <div class="services__card">
              <h1>Classic style</h1>
              <p class="white">Black shirts</p>

              <div class="services__btn"></div>
            </div>
            <div class="services__card">
              <h1>Everything Else</h1>
              <p class="card2">Accessories</p>
              <div class="services__btn"></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Services;
