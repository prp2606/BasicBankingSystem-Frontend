import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import Base from "./base";
import profileImage from "./../Images/profileImage.jpg";
import { getTransactionsOfCustomer } from "../apiCalls/apiCalls";

const CustomerDetails = () => {
  const [customerDetails, setCustomerDetails] = useState({});
  const [customerTransaction, setCustomerTransaction] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setCustomerDetails(location.state.customer);

    getTransactionsOfCustomer(location.state.customer.name).then((data) => {
      if (data.error) {
        console.log("Error", data.error);
      } else {
        console.log("data", data);
        setCustomerTransaction(data);
      }
    });
  }, []);

  const detailsLeftSide = () => {
    return (
      <div className="card bg-dark px-3 py-3">
        {/* <h4 className="card-header bg-dark text-white">Admin Navigation</h4> */}
        {/* <img src="..." alt="..." class="img-thumbnail"></img> */}
        {/* <img
          src={require("./Images/profileImage.jpg")}
          class="img-fluid"
          alt="Responsive image"
        /> */}
        <img
          src={profileImage}
          class="img-fluid"
          alt="Responsive image"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  };

  const detailsRightSide = () => {
    return (
      <div className="card mb-4">
        <div className="card-header d-flex flex-row justify-content-between align-items-center">
          <h4>Profile</h4>
          <button
            className="btn btn-success"
            onClick={() => {
              history.push({
                pathname: "/maketransaction",
                state: { transactionFrom: location.state.customer },
              });
            }}
          >
            Make Transactions
          </button>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="mr-4">Name:</span> {customerDetails.name}
          </li>
          <li className="list-group-item">
            <span className="mr-4">Email:</span> {customerDetails.email}
          </li>
          <li className="list-group-item">
            <span className="mr-4">Address:</span> {customerDetails.address}
          </li>
          <li className="list-group-item">
            <span className="mr-4">Initial Balance:</span>
            {customerDetails.initialBalance}
          </li>
          <li className="list-group-item">
            <span className="mr-4">Current Balance:</span>
            {customerDetails.currentBalance}
            {/* <div className="row">
              <span className="col-3">Current Balance:</span>
              {/* <span className="mr-4">Current Balance:</span> 
              <div className="col-9">{customerDetails.currentBalance}</div>
            </div> */}
          </li>
          <li className="list-group-item d-flex flex-row justify-content-between align-items-center">
            {/* <span className="bg-success p-2 text-white">Profile</span> */}
            <Link className="btn btn-danger" to="/home">
              <span>Admin Home</span>
            </Link>
            <Link className="btn btn-primary" to="/customers">
              <span>Back</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="Welcome Admin"
      description={`Here are ${customerDetails.name}'s profile details`}
      className="container mx-auto my-4"
    >
      <div className="row bg-warning p-4 mb-4">
        <div className="col-3">{detailsLeftSide()}</div>
        <div className="col-9">{detailsRightSide()}</div>
      </div>
      <div className="row bg-dark mb-4 px-4">
        <div className="col-12">
          {/* <h2 className="text-center text-white my-3">
            Total {allTransactions.length} allTransactions
          </h2> */}
          <h3 className="row text-center text-white my-3 p-2">
            Transaction History
          </h3>
          <div className="row bg-danger text-center my-3 p-2">
            <div className="col-4">
              <h5 className="text-white text-center">Transaction Amount (₹)</h5>
            </div>
            <div className="col-4">
              <h5 className="text-white text-center">Debit/Credit</h5>
            </div>

            <div className="col-4">
              <h5 className="text-white text-center">Transaction Day</h5>
            </div>
          </div>
          {/* {console.log(customerTransaction)} */}

          {customerTransaction &&
            customerTransaction.map((transaction, index) => {
              const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              };

              let detail =
                transaction.transactionFrom === customerDetails._id
                  ? "Debit"
                  : "Credit";

              return (
                <div className="row text-center mb-2" key={index}>
                  <div className="col-4">
                    <p className="text-white text-center">
                      ₹ {transaction.transactionAmount}
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="text-white text-center">{detail}</p>
                  </div>
                  <div className="col-4">
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
    //   <div>
    //     <h1>Customer Details</h1>
    //     <Link to="/customers">Back to customer page</Link>
    //     <p>{customerDetails.name}</p>
    //     <p>{customerDetails.email}</p>
    //     <p>{customerDetails.initialBalance}</p>
    //     <p>{customerDetails.currentBalance}</p>
    //   </div>
    //   <button
    //     onClick={() => {
    //       history.push({
    //         pathname: "/maketransaction",
    //         state: { transactionFrom: location.state.customer },
    //       });
    //     }}
    //   >
    //     Make Transactions
    //   </button>
    // </>
  );
};

export default CustomerDetails;
