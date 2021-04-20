import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
// import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  const history = useHistory();

  const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#2ecc72" };
    } else {
      return { color: "#FFFFFF" };
    }
  };

  return (
    <div>
      <div>
        <ul className="nav nav-tabs bg-dark">
          <li className="nav-item">
            <Link
              style={currentTab(history, "/home")}
              className="nav-link"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/customers")}
              className="nav-link"
              to="/customers"
            >
              All Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/transactions")}
              className="nav-link"
              to="/transactions"
            >
              All Transactions
            </Link>
          </li>
        </ul>
      </div>

      <div className="container-fluid">
        <div className="border border-warning border-top-0 bg-dark text-white text-center p-4">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer border border-success bg-dark my-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>If you got any questions, feel free to reach out!</h4>
          <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        {/* <div className="container-fluid">
        <span className="text-muted">
          An Amazing <span className="text-white">MERN</span> Bootcamp
        </span>
      </div> */}
      </footer>
    </div>
  );
};

export default Base;
