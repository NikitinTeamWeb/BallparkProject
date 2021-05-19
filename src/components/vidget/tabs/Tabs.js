import React from "react";
import styles from "./Tabs.module.scss";

const Tabs = ({ children }) => <div className={styles.tabs}>{children}</div>;

export default Tabs