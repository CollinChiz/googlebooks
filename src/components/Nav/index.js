import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Book Search
      </a>
      <div id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Search
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/list">
              My Collection
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}