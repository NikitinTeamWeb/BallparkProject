import React from "react";
import styles from "./Message.module.scss";
import classnames from "classnames";

const Message = ({img, name, text, userMessage}) => {
  return (
    <div className={classnames(styles.block, {[styles.userMessage] : userMessage})}>
      <div className={styles.icon}><img src={img} alt=""/></div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Message