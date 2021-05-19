import React from "react";
import styles from "./Chat.module.scss";
import sendImg from "../../../global/img/icons/send.svg";
import Message from "./message/Message";
import userImg from '../../../global/img/userpic.png';

const Chat = () => {
  return (
    <div className={styles.block}>
      <div className={styles.main}>
        <div className={styles.mainBlock}>
          <Message name="July Castillo" text="Hi everyone" img={userImg}  />
          <Message name="July Castillo" text="Hi everyone Hi everyone ssljlksdf lkjl kjsld jlse" img={userImg} userMessage />
          <Message name="July Castillo" text="Hi everyone" img={userImg}  />
          <Message name="July Castillo" text="Hi everyone ssljlksdf lkjl kjsld jlse" img={userImg}  />
          <Message name="July Castillo" text="Hi everyone" img={userImg}  userMessage/>
          <Message name="July Castillo" text="Hi everyone" img={userImg}  />
          <Message name="July Castillo" text="Hi everyone" img={userImg}  />
          <Message name="July Castillo" text="Hi everyone" img={userImg}  userMessage/>
          <Message name="July Castillo" text="Hi everyone" img={userImg}  />
        </div>
      </div>
      <form>
        <div className={styles.footer}>
          <div className={styles.text}>
            <textarea rows="1" placeholder="Write your message..."/>
          </div>
          <div className={styles.button}>
            <button >
              <img src={sendImg} alt=""/>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Chat