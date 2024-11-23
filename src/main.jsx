import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Layout } from "./Layout";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
//   {
//     path: "/generate",
//     element: <QrCodeGenerator />,
//   },

//   {
//     path: "/scan",
//     element: <QrCodeScanner />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
