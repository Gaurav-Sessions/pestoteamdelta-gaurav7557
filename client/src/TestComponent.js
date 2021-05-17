import React, { useEffect, useState } from "react";
import { Responsive } from "./helper/Responsive";
import { auth } from "./config/firebaseConfig";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";

//components
import HeaderLarge from "./components/Header/Large/Index";
import Navbar from "./components/Navbar/Index";
import Header from "./components/Header/Index";
import AccountInfo from "./components/User/AccountInfo/AccountInfo";
import ContactUs from "./Pages/ContactUs";
import Recover from "./components/User/RecoverPassword/Index";
import AccountRegister from "./Pages/AccountRegister";
import AccountLogin from "./Pages/AccountLogin";
import Address from "./components/User/AccountInfo/UserAddresses/Index";

function TestComponent() {
  const { REACT_APP_TEST_COMPONENTS, REACT_APP_REACT_ENV } = process.env;

  const [{ user }, dispatch] = useStateValue();

  // to keep track of user
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // add user to data layer on loggin in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // remove user from data layer on logging out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  useEffect(() => {}, []);
  console.log(user, "user");
  console.log(user?.uid, "uid");

  return (
    <Router>
      <Responsive displayIn={["Laptop"]}>
        <>
          {" "}
          <HeaderLarge /> <Navbar />{" "}
        </>
      </Responsive>

      <Responsive displayIn={["Mobile"]}>
        <>
          <Header />
        </>
      </Responsive>

      <Responsive displayIn={["Tablet"]}>
        <>
          <Header />
        </>
      </Responsive>

      <Switch>
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route path='/restorepassword'>
          <Recover />
        </Route>
        <Route path='/register'>
          <AccountRegister />
        </Route>
        <Route path='/account/login'>
          <AccountLogin />
        </Route>
        <Route path='/account/addresses'>
          <Address />
        </Route>
        <Route path='/account'>
          <AccountInfo />
        </Route>
        <Route path='/'></Route>
      </Switch>
    </Router>
  );
}

export default TestComponent;
