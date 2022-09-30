import React from "react";

//CSS
import "./slidercard.css";

function Card(props) {
  let { title, description, imageUrl, newsUrl, date } = props;
  return (
    <div>
      <article className="high-card">
        <div className="high-card-Header">
          <header>
            <img src={imageUrl} className="card-header" alt={title} />
          </header>
        </div>

        <div className="high-card-Body">
          <div className="high-card-body">
            <p className="date">{new Date(date).toDateString()}</p>

            <h2>{title}</h2>
            <p className="high-body-content sli-description">{description}</p>

            <div className="butoonclass">
              <button className="button button-primary"></button>
              <a
                className="high-card-button"
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
              >
                <i className="fa fa-chevron-right fa-3xl"></i>
                &nbsp;&nbsp;&nbsp;Find Out More
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
