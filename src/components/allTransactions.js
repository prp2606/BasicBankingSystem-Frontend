import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllTransactions } from "../apiCalls/apiCalls";

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
import Base from "./base";

const AllTransactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);

  const history = useHistory();

  useEffect(() => {
    getAllTransactions().then((data) => {
      if (data.error) {
        console.log("Error", data.error);
      } else {
        console.log(data);
        setAllTransactions(data);
      }
    });
  }, []);

  return (
    <Base
      title="Welcome Admin"
      description="Here listed are All Transactions "
      className="container bg-dark p-4 mx-auto my-3"
    >
      <Link className="btn btn-info" to="/home">
        <span>Admin Home</span>
      </Link>
      {/* <h2 className="mb-0 text-center">All Transactions</h2> */}
      <div className="row">
        <div className="col-12">
          {/* <h2 className="text-center text-white my-3">
            Total {allTransactions.length} allTransactions
          </h2> */}
          <div className="row bg-danger text-center my-3 p-2">
            <div className="col-3">
              <h5 className="text-white text-center">Transaction From</h5>
            </div>
            <div className="col-3">
              <h5 className="text-white text-center">Transaction To</h5>
            </div>
            <div className="col-3">
              <h5 className="text-white text-center">Transaction Amount (₹)</h5>
            </div>
            <div className="col-3">
              <h5 className="text-white text-center">Transaction Day</h5>
            </div>
          </div>

          {allTransactions &&
            allTransactions.map((transaction, index) => {
              const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              };

              return (
                <div className="row text-center mb-2" key={index}>
                  <div className="col-3">
                    <p className="text-white text-center">
                      {transaction.transactionFrom}
                    </p>
                  </div>
                  <div className="col-3">
                    <p className="text-white text-center">
                      {transaction.transactionTo}
                    </p>
                  </div>
                  <div className="col-3">
                    <p className="text-white text-center">
                      ₹ {transaction.transactionAmount}
                    </p>
                  </div>
                  <div className="col-3">
                    <p className="text-white text-center">
                      {new Date(transaction.updatedAt).toLocaleString(
                        "en-US",
                        options
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Base>

    // <>
    //   <h1>All Transactions</h1>
    //   <Link to="/home">Back to Home</Link>
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>FROM</th>
    //         <th>TO</th>
    //         <th>AMOUNT</th>
    //         <th>AT</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {allTransactions.map((transaction, index) => {
    //         // console.log(
    //         //   Date.parse(transaction.updatedAt).toString("DD MM YYYY")
    //         // );

    //         const options = {
    //           weekday: "long",
    //           year: "numeric",
    //           month: "long",
    //           day: "numeric",
    //         };

    //         return (
    //           <tr key={index}>
    //             <td>{transaction.transactionFrom}</td>
    //             <td>{transaction.transactionTo}</td>
    //             <td>{transaction.transactionAmount}</td>
    //             <td>
    //               {new Date(transaction.updatedAt).toLocaleString(
    //                 "en-US",
    //                 options
    //               )}
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </>
  );
};

export default AllTransactions;
