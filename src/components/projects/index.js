import React from 'react';
import styles from './styles.module.css';
import chatIcon from './pics/chat.jpg'
import almostRpgIcon from './pics/sword.png'
import fishAiIcon from './pics/fish.png'

class Projects extends React.Component {

    render() {
        return(
            <div name="projects" className={styles.collumn}>
                <h3 class="header"> Projects: </h3> 
                <div>
                    <div className={styles.wrapper}>
                        <div className={styles.project}>
                            <h1><a className={styles.projectText} href="https://github.com/ah-lai/Web-App-Messenger"  target="_blank"> Messenger Web App </a></h1>
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> Javascript </span></div>
                                <div class="skill"><span class="skillText"> C# </span></div>
                                <div class="skill"><span class="skillText"> ASP.NET </span></div>
                                <div class="skill"><span class="skillText"> jQuery </span></div>
                            </div>
                            <h5> Description </h5>
                        </div>
                        <div id="MessengerDiv" className={styles.image}>
                            <img className={styles.transform} src={chatIcon} width="20%"/>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.project}>
                            <h1> <a className={styles.projectText} href="https://github.com/ah-lai/FishAI" target="_blank">FishAI</a></h1>
                            <h5> Description </h5>
                        </div>
                        <div id="FishAiDiv" className={styles.image}>
                            <img src={fishAiIcon} width="15%"/>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.project}>
                            <h1><a className={styles.projectText} href="https://github.com/ah-lai/Almost-an-RPG"  target="_blank">Almost a RPG</a></h1>
                            <h5> Description </h5>
                        </div>
                        <div id="RpgDiv" className={styles.image}>
                            <img src={almostRpgIcon} width="20%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects