import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="mx-auto">
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            // eslint-disable-next-line
            style={{ height: "12rem" }}
            src={imageUrl}
            className="card-img-top"
            alt="No Image Found"
            // eslint-disable-next-line
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span className="badge rounded-pill text-bg-warning p-2 fs-7">
              {source}
            </span>
            <p className="card-text">{description}...</p>
            <p className="card-footer text-body-secondary p-0">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
