import React from "react";
import styles from "./app.module.scss";
console.log("styles: ", styles);

const App = () => {
  return <div className={styles.app}>Hello World</div>;
};

export default App;
