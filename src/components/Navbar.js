import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ setSearchWord }) => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-secondary">
                <div className="navbar">
                  <FaBitcoin className="icon" />
                  <h1>Crypto Stats</h1>
                </div>
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
              type="search"
              className="form-control form-control-dark"
              placeholder="Search for your coin"
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
