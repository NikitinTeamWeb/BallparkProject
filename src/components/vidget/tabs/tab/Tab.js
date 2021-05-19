import React from "react";
import styles from "./Tab.module.scss";
import classnames from "classnames";

const Tab = ({ onClick, id, img, text, active = 0 }) => (
  <div
    className={classnames([styles.tab, { [styles.active]: active === id }])}
    onClick={onClick}
  >
    <span className={styles.icon}>
      <img src={img} alt=""/>
    </span>
    <span className={styles.title}>{text}</span>
  </div>
);

export default Tab;
