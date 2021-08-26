import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./layout/Layout";

import "react-toastify/dist/ReactToastify.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
