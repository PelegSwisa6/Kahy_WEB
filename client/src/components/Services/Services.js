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

      <div class="services__photo">
        <img src={black} alt="" width="200" class="services__photos1" />
        <img src={white} alt="" width="200" class="services__photos1" />
        <img src={jewel} alt="" width="200" class="services__photos1" />
      </div>

      <div class="services__wrappe">
        <div class="services__card">
          <h1>Elegant style in white</h1>
          <p class="card2">White shirts</p>
        </div>
        <div class="services__card">
          <h1>Classic style</h1>
          <p class="white">Black shirts</p>
        </div>
        <div class="services__card">
          <h1>Everything Else</h1>
          <p class="card2">Accessories</p>
        </div>
      </div>
    </body>
  );
}

export default Services;
