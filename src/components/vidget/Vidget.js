import React, {useState} from "react";
import styles from "./Vidget.module.scss";
import Tabs from "./tabs/Tabs";
import Tab from "./tabs/tab/Tab";
import chatImg from '../../global/img/icons/message.svg';
import triviaImg from '../../global/img/icons/trivia.svg';
import speakerImg from '../../global/img/icons/speaker.svg';
import infoImg from '../../global/img/icons/info.svg';
import Chat from "./chat/Chat";

const Vidget = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={styles.vidget}>
      <div className={styles.top}>
        <Tabs>
          <Tab
            onClick={() => setSelectedTab(0)}
            text="Chat"
            img={chatImg}
            id={0}
            active={selectedTab}
          />
          <Tab
            onClick={() => setSelectedTab(1)}
            text="Trivia"
            img={triviaImg}
            id={1}
            active={selectedTab}
          />
          <Tab
            onClick={() => setSelectedTab(2)}
            text="Speaker"
            img={speakerImg}
            id={2}
            active={selectedTab}
          />
          <Tab
            onClick={() => setSelectedTab(3)}
            text="Info"
            img={infoImg}
            id={3}
            active={selectedTab}
          />
        </Tabs>
      </div>
      <div className={styles.main}>
        {selectedTab === 0 && (
          <div className={styles.chat}>
            <Chat />
          </div>
        )}
        {selectedTab === 1 && (
          <span >2</span>
        )}
        {selectedTab === 2 && (
          <span >3</span>
        )}
        {selectedTab === 3 && (
          <span >4</span>
        )}
      </div>
    </div>
  )
}

export default Vidget