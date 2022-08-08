// import logo from "./logo.svg";
import "../../components/App/App.css";

function App() {
  return (
    <div>
      <div class="hero" id="home">
        <div class="hero__container">
          <h2 class="hero__heading">Welcome to our website </h2>
          <h1 class="hero__heading">
            <span>Kahy T-shirt</span>
          </h1>
          <p class="hero__description">Unisex fashion</p>
          <button class="main__btn1">
            <a href="https://api.whatsapp.com/send?phone=972542508941&text=היי רציתי לשמוע עוד פרטים">
              {" "}
              Click here to contact us on WhatsApp
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
