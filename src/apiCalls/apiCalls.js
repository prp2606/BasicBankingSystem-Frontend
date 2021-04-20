const basicBankingAPI =
  "https://basic-banking-system-sparks-f.herokuapp.com/sparksfoundation/";
// const basicBankingAPI = "http://localhost:7200/sparksfoundation";

export const getAllCustomers = () => {
  return fetch(`${basicBankingAPI}/customer/allcustomers`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      //   console.log(response.body);
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getCustomer = (customerInfo) => {
  return fetch(`${basicBankingAPI}/customer/${customerInfo}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      //   console.log(response.body);
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const performTransaction = (transactionBody) => {
  return fetch(`${basicBankingAPI}/transaction/savetransaction`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(transactionBody),
  })
    .then((response) => {
      //   console.log(response.body);
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getAllTransactions = () => {
  return fetch(`${basicBankingAPI}/transaction/getalltransactions`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      //   console.log(response.body);
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getTransactionsOfCustomer = (customerName) => {
  return fetch(
    `${basicBankingAPI}/transaction/gettransactions/${customerName}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }
  )
    .then((response) => {
      //   console.log(response.body);
      return response.json();
    })
    .catch((error) => console.log(error));
};
