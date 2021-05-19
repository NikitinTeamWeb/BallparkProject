import React, {useState, useEffect} from "react";
import styles from "./Header.module.scss"
import logoImg from '../../global/img/logo.svg';
import arrowImg from '../../global/img/icons/arrowMenu.svg';
import notificationImg from '../../global/img/icons/notification.svg';
import messageImg from '../../global/img/icons/message.svg';
import userImg from '../../global/img/userpic.png';
import { config } from "./config";
import classnames from "classnames";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const onChange = () => setIsOpen((prev) => !prev);

  const items = config.map(({ id, title, image }) => (
    <a href="/#" className={styles.item} key={id}>
      <div className={styles.icon}>
        <img src={image} alt=""/>
      </div>
      <p className={styles.title}>{ title }</p>
    </a>
  ));
  return (
    
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <a href="/#"><img src={logoImg} alt=""/></a>
          </div>
          <div className={classnames(styles.menu, { [styles.open]: isOpen })}>
            <ul className={styles.list}>
              {items}
            </ul>
            <span className={styles.btn} onClick={onChange}><img src={arrowImg} alt=""/></span>
          </div>
          <div className={styles.info}>
            <span className={styles.notification}>
              <img src={notificationImg} alt=""/>
              <span className={styles.notificationLabel}>54</span>
            </span>
            <span className={styles.message}>
              <img src={messageImg} alt=""/>
            </span>
            <span className={styles.user}>
              <img src={userImg} alt=""/>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header