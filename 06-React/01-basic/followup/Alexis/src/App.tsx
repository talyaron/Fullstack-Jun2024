import { useState } from "react";
import pink from "./assets/pink.jpeg";
import sky from "./assets/sky.jpeg";
import "./App.css";
import styles from "./view/components/box/box.module.scss"
import Box from "./view/components/box/box";
function App() {
  return (
    <>
      <div className={styles.block}>
        <h6 className={styles.header}>Favourites</h6>
        <div className={styles.article}>
          <Box img={pink} text="Pink is literally the best color(no doubts)!" description="20:11 Thursday" />

          <Box img={sky} text="The sky was so pretty we had to report" description="15:15 Tuesday"/>
        </div>
      </div>
    </>
  );
}

export default App;
