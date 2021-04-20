import React, { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import Base from "./base";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/customers" className="nav-link text-primary">
              All Customers
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/transactions" className="nav-link text-primary">
              All Transactions
            </Link>
          </li>
          {/* <li className="list-group-item">
            <Link to="/admin/create/product" className="nav-link text-success">
              Create Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/products" className="nav-link text-success">
              Manage Products
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/orders" className="nav-link text-success">
              Manage Orders
            </Link>
          </li> */}
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">
          Instructions and Transaction Guide [MUST READ]
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <p className="container-fluid text-dark pt-3 pb-1 text-justify">
              Welcome! This website is the Basic Banking System, developed to
              showcase the basic working of customers and transactions
              management.
            </p>
            <p className="container-fluid text-dark pb-1 text-justify">
              <strong>Work Flow -</strong> Home Page &#8594; View All Customers
              &#8594; Select and View One Customer &#8594; Transfer Money
              &#8594; Select Customer To Transfer &#8594; View All Customers
            </p>
            <p className="container-fluid text-dark pb-1 text-justify">
              This is the <strong>Admin Panel</strong>. You can navigate to see
              ALL CUSTOMERS registered in system and ALL TRANSACTIONS to see the
              entire transaction history. Once you go in ALL CUSTOMERS page, you
              will get an option to view any customer's details and to make
              transaction form any customer's account.
            </p>
            <p className="container-fluid text-dark pb-1 text-justify">
              In customer details, you can see the{" "}
              <i>
                Name, Email, Address, Initial balance, Current balance and
                Transaction history
              </i>{" "}
              for that particular customer's account. You will have an option to
              make transaction here as well.
            </p>
            <p className="container-fluid text-dark pb-1 text-justify">
              In transaction page, you have to fill the transaction amount,
              select the beneficiary account and enter an{" "}
              <strong>ADMIN CODE</strong>. ADMIN CODE you need to fill in is{" "}
              <strong>
                <i>BBS_Admin@123</i>
              </strong>
              . And hola! Transaction is done. You can cross check whether the
              transaction is done or not by checking ALL TRANSACTIONS page and
              transaction history in both customer's detail page :)
            </p>
            <p className="container-fluid text-dark pb-1 text-justify">
              <i>
                All use cases are covered and implemented for doing transaction.
                Eg: Transaction amount = 0 is not allowed, Transaction in same
                customer's account is not allowed, Transaction with invalid
                ADMIN CODE is not allowed, Amount to be transferred cannot be
                greater than current balance etc.
              </i>
            </p>
          </li>
          <li className="list-group-item">
            <span className="bg-danger p-2 text-white">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    // <Base />
    <Base
      title="Welcome to Basic Banking System"
      description="Manage all your customers and transactions here"
      className="container bg-dark mx-auto my-4"
    >
      <div className="row p-4 rounded ">
        <div className="col-3">{adminLeftSide()}</div>
        <div className="col-9">{adminRightSide()}</div>
      </div>
    </Base>
  );

  // return (
  // <Base>

  {
    /* <h1>Home</h1>
      <Link to="/customers">View all customers</Link>
      <Link to="/transactions">View all transactions</Link> */
  }

  {
    /* <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Basic Banking System</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/customers">All Customers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/transactions">All Transactions</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
            </Nav>
            <NavbarText>Happy Banking</NavbarText>
          </Collapse>
        </Navbar>
      </div> */
  }
  {
    /* {adminLeftSide()} */
  }
  {
    /* <Base/> */
  }
  {
    /* ); */
  }
};

export default Home;
