import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }
  componentDidMount() {
    // this.setState({ searchText: this.state.searchText });
  }
  searchNews = () => {
    // console.log(this.state.searchText);
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
              News 360&deg; {this.state.searchText}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2 text-dark"
                  type="text"
                  placeholder="Enter"
                  value={this.state.searchText}
                  onChange={(event) =>
                    this.setState({ searchText: event.target.value })
                  }
                />
                <button
                  onClick={this.searchNews}
                  className="btn btn-outline-success"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
