import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SaerchPage/SearchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <Error404 />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return (
    <>
      {/* <ToastContainer style={{ marginTop: "60px" }} /> */}
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
