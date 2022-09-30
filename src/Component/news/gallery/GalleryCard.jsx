import React from "react";

//CSS
import "./gallerycard.css";

function Card(props) {
  let { title, description, imageUrl, newsUrl, date } = props;

  return (
    <div>
      <article className="gallery-card">
        <div className="gallery-card-Header">
          <header>
            <img src={imageUrl} className="card-header" alt={title} />
          </header>
        </div>

        <div className="gallery-card-Body">
          <div className="gallery-card-body">
            <p className="date">{new Date(date).toDateString()}</p>

            <h2>{title}</h2>

            <p className="gallery-body-content sli-description">
              {description}
            </p>

            <div className="butoonclass">
              <button className="button button-primary"></button>
              <a
                className="gallery-card-button"
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
              >
                <i className="fas fa-chevron-right fa-3xl"></i>
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
