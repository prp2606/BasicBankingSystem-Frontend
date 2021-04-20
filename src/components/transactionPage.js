import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  getAllCustomers,
  getCustomer,
  performTransaction,
} from "../apiCalls/apiCalls";
import Base from "./base";

const TransactionPage = () => {
  const [adminCode, setAdminCode] = useState("");

  const [transactionFromCustomer, setTransactionFromCustomer] = useState({});
  const [
    transactionToCustomerSelector,
    setTransactionToCustomerSelector,
  ] = useState("Penelope Ramos");

  const [transactionAmount, setTransactionAmount] = useState(0);
  const [allCustomers, setAllCustomers] = useState([]);

  const [visible, setVisible] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertText, setAlertText] = useState("");

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    console.log(location.state.transactionFrom);
    setTransactionFromCustomer(location.state.transactionFrom);

    getAllCustomers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAllCustomers(data);
      }
    });
  }, []);

  const doTransaction = (event) => {
    event.preventDefault();

    if (transactionAmount <= 0) {
      setVisible(false);

      setAlertColor("danger");
      setAlertText("Transaction amount should be > 0");

      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    } else if (transactionAmount > 0) {
      if (adminCode === "BBS_Admin@123") {
        getCustomer(transactionToCustomerSelector).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            let transactionBody = {
              transactionFrom: transactionFromCustomer,
              transactionTo: data[0],
              transactionAmount: transactionAmount,
            };

            performTransaction(transactionBody).then((data) => {
              if (data.error) {
                // console.log(data.error);

                setVisible(false);

                setAlertColor("warning");
                setAlertText(data.error);

                setVisible(true);

                setTimeout(() => {
                  setVisible(false);
                }, 5000);
              } else {
                // console.log(data.msg);

                if (data.msg === "Transaction saved successfully") {
                  setVisible(false);

                  setAlertColor("success");
                  setAlertText(
                    "Amount transfered successfully! Happy Banking!"
                  );

                  setTransactionAmount(0);
                  setAdminCode("");
                  setVisible(true);

                  setTimeout(() => {
                    setVisible(false);
                    history.push("/customers");
                  }, 5000);
                } else if (data.msg === "Transaction Failed") {
                  setVisible(false);

                  setAlertColor("success");
                  setAlertText(`${data.message}! ${data.details}`);

                  setVisible(true);

                  setTimeout(() => {
                    setVisible(false);
                  }, 5000);
                }
              }
            });
          }
        });
      } else {
        setVisible(false);

        setAlertColor("danger");
        setAlertText("Admin code is incorrect!");

        setVisible(true);

        setTimeout(() => {
          setVisible(false);
        }, 5000);
      }
    }
  };

  const transactionForm = () => {
    return (
      <div className="row py-5 border border-primary rounded">
        {visible && (
          <div class={`alert alert-${alertColor} text-center`} role="alert">
            <strong>{alertText}</strong>
          </div>
        )}
        <div className="list-group-item bg-dark d-flex flex-row justify-content-between align-items-center">
          {/* <span className="bg-success p-2 text-white">Profile</span> */}
          <Link className="btn btn-danger" to="/home">
            <span>Admin Home</span>
          </Link>
          <Link className="btn btn-primary" to="/customers">
            <span>Back</span>
          </Link>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="col-md-6 text-left">
            <form>
              <div className="form-group">
                <label className="text-light">Transaction From</label>
                <input
                  className="form-control"
                  type="text"
                  value={transactionFromCustomer.name}
                />
              </div>
              <div className="form-group">
                <label className="text-light">Transaction Amount (₹)</label>
                <input
                  className="form-control"
                  onChange={(event) => {
                    setTransactionAmount(event.target.value);
                  }}
                  value={transactionAmount}
                  type="number"
                />
              </div>
              <div className="form-group">
                <label className="text-light">Transaction To</label>
                <select
                  className="form-control"
                  onChange={(event) => {
                    setTransactionToCustomerSelector(event.target.value);
                  }}
                  value={transactionToCustomerSelector}
                >
                  <option value="Penelope Ramos">Penelope Ramos</option>
                  <option value="Gale Long">Gale Long</option>
                  <option value="Jackson Hersey">Jackson Hersey</option>
                  <option value="Ford Harper">Ford Harper</option>
                  <option value="Astrid Fletcher">Astrid Fletcher</option>
                  <option value="Thalia Kim">Thalia Kim</option>
                  <option value="Dale Mason">Dale Mason</option>
                  <option value="Polly Barrett">Polly Barrett</option>
                  <option value="Nelson Ball">Nelson Ball</option>
                  <option value="Tony Mills">Tony Mills</option>
                </select>
              </div>
              <label className="text-light">Admin Code</label>
              <input
                className="form-control"
                onChange={(event) => {
                  setAdminCode(event.target.value);
                }}
                type="password"
                value={adminCode}
              />
              <button
                onClick={doTransaction}
                className="btn btn-danger btn-block mt-4"
              >
                Transfer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base
      title="Welcome Admin"
      description="Make transactions here"
      className="container bg-dark mx-auto my-4"
    >
      {transactionForm()}
      {/* <div className="col-3">{detailsLeftSide()}</div> */}
      {/* <div className="col-9">{detailsRightSide()}</div> */}
      {/* <div className="row bg-dark mb-4 px-4">
        <div className="col-12">
          
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
        </div>
      </div> */}
    </Base>

    // <>
    //   <h1>Transaction page</h1>
    //   <Link to="/customers">Back to all customers</Link>
    //   <p>Transaction From: {transactionFromCustomer.name}</p>
    //   <label>Transaction Amount</label>
    //   <input
    //     onChange={(event) => {
    //       setTransactionAmount(event.target.value);
    //     }}
    //     value={transactionAmount}
    //     type="number"
    //   />
    //   <label>Transaction To</label>
    //   <select
    //     onChange={(event) => {
    //       setTransactionToCustomerSelector(event.target.value);
    //     }}
    //     value={transactionToCustomerSelector}
    //     // type="number"
    //   >
    //     {/* {allCustomers &&
    //       allCustomers.map((customer, index) => {
    //         console.log(allCustomers);
    //         <option key={index} value={customer}>
    //           {customer.name}
    //         </option>;
    //       })} */}
    //     <option value="customer1">customer1</option>
    //     <option value="Gale Long">Gale Long</option>
    //     <option value="customer3">customer3</option>
    //     <option value="customer4">customer4</option>
    //     <option value="customer5">customer5</option>
    //     <option value="customer6">customer6</option>
    //     <option value="customer7">customer7</option>
    //     <option value="customer8">customer8</option>
    //     <option value="customer9">customer9</option>
    //     <option value="customer10">customer10</option>
    //   </select>

    //   <button onClick={doTransaction}>Transfer</button>
    // </>
  );
};

export default TransactionPage;
