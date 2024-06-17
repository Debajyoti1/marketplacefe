import React, { useEffect } from "react";
import styles from "./SearchPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import MainContent from "../../components/Search/MainContent/MainContent";
import Sidebar from "../../components/Search/Sidebar/Sidebar";
import Loader from "../../components/Loader/Loader";
import { getSearchData, searchGetSetData, sellerSelector } from "../../redux/reducers/sellerReducer";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchData, isLoading,search } = useSelector(sellerSelector);

  useEffect(() => {
    if (!searchData) {
      dispatch(getSearchData());
    }
  }, [searchData, dispatch]);

  useEffect(() => {
    let timer;

    if (search) {
      // Clear previous timer to avoid multiple concurrent API calls
      clearTimeout(timer);

      // Set a new timer for delayed API call
      timer = setTimeout(() => {
        dispatch(searchGetSetData(search));
      }, 500); // Delay of 2000 milliseconds (2 seconds)
    }

    return () => {
      // Cleanup: Clear the timer if component unmounts or if search changes
      clearTimeout(timer);
    };
  }, [dispatch, search]); // Dependency array with dispatch and search



  return (
    isLoading ? <Loader /> : !searchData ? <p>Data Unavailable</p> :
    (<div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>)
  );
};

export default SearchPage;
