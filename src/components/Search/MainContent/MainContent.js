import React from 'react';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <h1>Main Content</h1>
      <p>This is the main body of the page.</p>
      {/* Your main content here */}
    </main>
  );
};

export default MainContent;
