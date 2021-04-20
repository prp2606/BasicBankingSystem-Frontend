import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import AllCustomers from "./components/allCustomers";
import CustomerDetails from "./components/customerDetails";
import TransactionPage from "./components/transactionPage";
import AllTransactions from "./components/allTransactions";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/customers" exact component={AllCustomers} />
        <Route path="/transactions" exact component={AllTransactions} />
        <Route
          path="/customer"
          exact
          render={(props) => <CustomerDetails {...props} />}
        />
        <Route
          path="/maketransaction"
          exact
          render={(props) => <TransactionPage {...props} />}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
