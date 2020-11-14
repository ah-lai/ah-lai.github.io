import React from 'react';
import styles from './styles.module.css';
import chatIcon from './pics/chat.jpg'
import almostRpgIcon from './pics/sword.png'
import fishAiIcon from './pics/fish.png'

class Projects extends React.Component {

    render() {
        return(
            <section>
                <div name="projects" className={styles.collumn}>
                    <h3 className={styles.title}> Projects: </h3> 
                    <br></br>
                    <div>
                        <div className={styles.wrapper}>
                            <div className={styles.project}>
                                <h1 className={styles.projectText}> <bold> Messenger Web App </bold> </h1>
                                <h5> Description </h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.transform} src={chatIcon} width="20%"/>
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.project}>
                                <h1> <bold> FishAI </bold> </h1>
                                <h5> Description </h5>
                            </div>
                            <div className={styles.image}>
                                <img src={fishAiIcon} width="15%"/>
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.project}>
                                <h1> <bold> Almost an RPG </bold> </h1>
                                <h5> Description </h5>
                            </div>
                            <div className={styles.image}>
                                <img src={almostRpgIcon} width="20%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects