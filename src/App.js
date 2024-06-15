import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./components/Layout/Layout";

function App() {
  // const browserRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     errorElement: <Error404 />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Landing />,
  //       },
  //       {
  //         path: "signin",
  //         element: <Signin />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <>
      {/* <ToastContainer style={{ marginTop: "60px" }} />
      <RouterProvider router={browserRouter} /> */}
      <NavBar />
    </>
  );
}

export default App;
