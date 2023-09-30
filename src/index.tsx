import "./index.css";
import React from "react";
import AboutMe from "./pages/AboutMe";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage";
import reportWebVitals from "./reportWebVitals";
import { ErrorElement } from "./ components/common/ErrorElement";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/about",
    element: <AboutMe />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <ErrorElement />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
