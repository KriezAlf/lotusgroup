import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Caroline from "./Image/Caroline.jpg";
import Michael from "./Image/Michael.jpeg";
import Steven from "./Image/Steven.jpg";
import Reynata from "./Image/Reynata.jpg";

function CardComponent() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Caroline} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1>Caroline Susanto (00000071280) </h1>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Steven} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1>Ignatius Steven (00000070642) </h1>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row2">
        <div className="col2">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Michael} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1>Michael Vallent (00000071361) </h1>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Reynata} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1>Reynata Prajnadi Tangajaya (00000070461)</h1>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
