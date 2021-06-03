import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const { REACT_APP_TEST_COMPONENTS } = process.env;
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

if (REACT_APP_TEST_COMPONENTS) {
  import("./TestComponent")
    .then((component) => {
      const TestComponent = component.default;
      ReactDOM.render(
        <React.StrictMode>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Elements stripe={stripePromise}>
              <TestComponent />
            </Elements>
          </StateProvider>
        </React.StrictMode>,
        document.getElementById("root")
      );
    })
    .catch(() => {
      ReactDOM.render(
        <div>Something went wrong in Test components</div>,
        document.getElementById("root")
      );
    });
} else {
  import("./App")
    .then((component) => {
      const App = component.default;
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById("root")
      );
    })
    .catch(() => {
      ReactDOM.render(
        <div>Something went wrong in Main Application</div>,
        document.getElementById("root")
      );
    });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
