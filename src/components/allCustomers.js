import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router";

import "bootstrap/dist/css/bootstrap.css";

import {
  Table,
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

import { getAllCustomers } from "../apiCalls/apiCalls";
import Base from "./base";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    getAllCustomers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCustomers(data);
      }
    });
  }, []);

  return (
    <Base
      title="Welcome Admin"
      description="Manage customers here"
      className="container bg-dark p-4 mx-auto my-3"
    >
      <Link className="btn btn-info" to="/home">
        <span>Admin Home</span>
      </Link>
      {/* <h2 className="mb-4 text-center">All Customers</h2> */}
      <div className="row">
        <div className="col-12">
          {/* <h2 className="text-center text-white my-3">
            Total {customers.length} customers
          </h2> */}
          <div className="row bg-danger text-center my-3 p-2">
            <div className="col-4">
              <h5 className="text-white text-center">Customer Name</h5>
            </div>
            <div className="col-4">
              <h5 className="text-white text-center">Details</h5>
            </div>
            <div className="col-4">
              <h5 className="text-white text-center">Transaction</h5>
            </div>
          </div>
          {customers &&
            customers.map((customer, index) => {
              return (
                <div className="row text-center mb-2">
                  <div className="col-4">
                    <p className="text-white text-center" key={index}>
                      {customer.name}
                    </p>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        history.push({
                          pathname: "/customer",
                          state: { customer: customer },
                        });
                      }}
                    >
                      <span>View Details</span>
                    </button>
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        history.push({
                          pathname: "/maketransaction",
                          state: { transactionFrom: customer },
                        });
                      }}
                    >
                      Make Transaction
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Base>

    // <>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">Basic Banking System</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         <NavItem>
    //           <NavLink href="/customers">All Customers</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="/transactions">All Transactions</NavLink>
    //         </NavItem>
    //         <UncontrolledDropdown nav inNavbar></UncontrolledDropdown>
    //       </Nav>
    //       <NavbarText>Happy Banking</NavbarText>
    //     </Collapse>
    //   </Navbar>
    //   <Table bordered>
    //     <thead>
    //       <tr>
    //         <th>#</th>
    //         <th className="text-center">Customer Name</th>
    //         <th className="text-center">Details</th>
    //         <th className="text-center">Make Transaction</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {customers &&
    //         customers.map((customer, index) => {
    //           return (
    //             <tr key={index}>
    //               <td>{index + 1}</td>
    //               <td className="text-center">{customer.name}</td>
    //               <td className="text-center">
    //                 <button
    //                   onClick={() => {
    //                     history.push({
    //                       pathname: "/customer",
    //                       state: { customer: customer },
    //                     });
    //                   }}
    //                 >
    //                   View details
    //                 </button>
    //               </td>
    //               <td className="text-center">
    //                 <button
    //                   onClick={() => {
    //                     history.push({
    //                       pathname: "/maketransaction",
    //                       state: { transactionFrom: customer },
    //                     });
    //                   }}
    //                 >
    //                   Make Transactions
    //                 </button>
    //               </td>
    //             </tr>
    //           );
    //         })}
    //     </tbody>
    //   </Table>
    // </>
  );
};

export default AllCustomers;
