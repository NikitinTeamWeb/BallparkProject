import React from "react";
import styles from "./homePage.module.scss";
import Header from "../../components/header/Header";
import Vidget from "../../components/vidget/Vidget";
import Vimeo from "react-vimeo"

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <div className={styles.video}>

        <div className={styles.videoBlock}>
          <Vimeo videoId="164438721" />
        </div>
        <h1 className={styles.videoTitle}>Identifying Your Workforce’s Print Habits</h1>
        <p className={styles.videoDescription}>Office, Remote and Hybrid Applications</p>


        </div>
        <div className={styles.vidget}>
          <Vidget />
          <span className={styles.nextVideo}>
            <span className={styles.nextButton}>Next Video</span>
            <span className={styles.nextTip}><p>Need to view full video to get access watch next</p></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HomePage