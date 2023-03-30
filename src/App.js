import React from "react";
import "./App.css";
import branch1 from "./images/branch2.png";
import branch2 from "./images/branch1.png";
import logo from "./images/logo.png";
import vine from "./images/vine.png";

function App() {
  return (
    <div className="App">
      <img
        src={branch1}
        alt="Branch 1"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <img
        src={branch2}
        alt="Branch 2"
        style={{ position: "absolute", top: 0, right: 0 }}
      />

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="email-input">
        <input type="email" placeholder="Enter your email" />
        <button>Yipee!</button>
      </div>

      <img src={vine} alt="Vine" style={{ display: "block", margin: "auto" }} />

      {[
        "Latest Adventures",
        "Trail Tales Adventure Series",
        "Learning Center"
      ].map((title) => (
        <div key={title}>
          <h2 className="section-title">{title}</h2>
          <div className="grid-container">
            {/* Replace these with actual data and images */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="grid-item"
                onClick={() => console.log(`Clicked on item ${item}`)}
              >
                <img
                  src={`https://via.placeholder.com/150?text=Image${item}`}
                  alt={`Adventure ${item}`}
                />
                <div className="text">
                  <h3>Adventure {item}</h3>
                  <p>Description of adventure {item}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src={vine}
            alt="Vine"
            style={{ display: "block", margin: "auto" }}
          />
        </div>
      ))}

      <div className="footer"></div>
    </div>
  );
}

export default App;
