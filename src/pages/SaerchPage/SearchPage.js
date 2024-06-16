import React from 'react';
import styles from './SearchPage.module.css';

import Sidebar from '../../components/Search/Sidebar/Sidebar'
import MainContent from '../../components/Search/MainContent/MainContent'
const SearchPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default SearchPage;
