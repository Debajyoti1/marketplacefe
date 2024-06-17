import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SaerchPage/SearchPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { notificationActions, notificationSelector } from "./redux/reducers/notificationReducer";


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
function App() {
  const dispatch = useDispatch();

  const { success_notification, error_notification } =
    useSelector(notificationSelector);

  useEffect(() => {
    if (error_notification) {
      toast.error(error_notification);
    } else if (success_notification) {
      toast.success(success_notification);
    }
    dispatch(notificationActions.reset());
  }, [success_notification, error_notification]);

  return (
    <>
      <ToastContainer style={{ marginTop: "60px" }} />
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
