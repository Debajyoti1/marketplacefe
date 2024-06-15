import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";


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
      <Layout />
    </>
  );
}

export default App;
