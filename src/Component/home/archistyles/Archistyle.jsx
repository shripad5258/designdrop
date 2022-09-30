import React from "react";

//CSS
import "./archistyle.css";

//Images
import gothic from "../../../img/Architectural-Styles/Gothic-Architecture.jpeg";
import ModernArchitecture from "../../../img/Architectural-Styles/Modern-Architecture.jpeg"
import NeoclassicalArchitecture from "../../../img/Architectural-Styles/Neoclassical-Architecture.png"
import NeofuturistArchitecture from "../../../img/Architectural-Styles/Neofuturist-Architecture.jpeg"

function Archistyle() {
  const url ="https://en.wikipedia.org/wiki/Gothic_architecture"
  return (
    <div>
      <section id="style">
        <h2>Architectural Common Styles</h2>
        <div className="style-container container">
          <div className="style-type fruits">
            <div className="img-container">
              <img src={gothic} alt="Gothic Architecture" />
              <div className="img-content">
                <h3>Gothic Architecture</h3>
                <a
                  href={url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore more
                </a>
                
              </div>
            </div>
          </div>
          <div className="style-type fruits">
            <div className="img-container">
              <img src={ModernArchitecture} alt="ModernArchitecture" />
              <div className="img-content">
                <h3>Modern Architecture</h3>
                
                <a
                  href="https://en.wikipedia.org/wiki/Modern_architecture"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  Explore more
                </a>
              </div>
            </div>
          </div>
          <div className="style-type fruits">
            <div className="img-container">
              <img src={NeoclassicalArchitecture} alt="Neoclassical Architecture" />
              <div className="img-content">
                <h3>Neoclassical Architecture</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Neoclassical_architecture"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore more
                </a>
              </div>
            </div>
          </div>
          <div className="style-type style">
            <div className="img-container">
              <img src={NeofuturistArchitecture} alt="Neofuturist Architecture" />
              <div className="img-content">
                <h3>Neofuturist Architecture</h3>
                <a
                  href="https://en.wikipedia.org/wiki/Neo-futurism"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Archistyle;
