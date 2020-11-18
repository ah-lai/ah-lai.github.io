import React from 'react';
import styles from './styles.module.css';
import chatIcon from './pics/chat.jpg'
import almostRpgIcon from './pics/sword.png'
import fishAiIcon from './pics/fish.png'
import stewartplatform from './pics/sw_model.png'

class Projects extends React.Component {
    render() {
        return(
            <div name="projects" className={styles.collumn}>
                <h3 class="header"> Projects: </h3> 
                <div>
                    <div className={styles.wrapper}>
                        <div className={styles.project}>
                            <h3><a className={styles.projectText} href="https://github.com/ah-lai/Web-App-Messenger"  target="_blank"> Lets Talk! </a></h3>
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> React </span></div>
                                <div class="skill"><span class="skillText"> Django </span></div>
                                <div class="skill"><span class="skillText"> mySQL </span></div>
                                <div class="skill"><span class="skillText"> REST </span></div>
                            </div>
                            <div className={styles.description}>
                                <h5> 
                                    Messenger web application used for communication between users. 
                                </h5>
                                    <br></br>
                                <ul className={styles.projectinfo} >
                                    <li>Leverages technologies such as user token authentication, RESTful calls, ORM, and follows the MVC model.</li>
                                    <li>Front-end developed in ReactJS (HTML/CSS), which communicates to a Django Rest back-end with a mySQL database.</li>
                                </ul>
                            </div>
                        </div>
                        <div id="MessengerDiv" className={styles.image}>
                            <img className={styles.transform} src={chatIcon} width="20%"/>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.project}>
                            <h3> <a className={styles.projectText} href="https://github.com/ah-lai/FishAI" target="_blank">FishAI</a></h3>
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> Swift </span></div>
                                <div class="skill"><span class="skillText"> Keras </span></div>
                                <div class="skill"><span class="skillText"> CoreML </span></div>
                                <div class="skill"><span class="skillText"> CNN </span></div>
                            </div>
                            <div className={styles.description}>
                                <h5> 
                                    An iOS application classifying fish species based on photo taken by user.
                                </h5>
                                <br></br>
                                <ul className={styles.projectinfo} >
                                    <li>Machine learning neural network was trained using Keras, where the model was deployed to CoreML.</li>
                                    <li>Created a script to build image training dataset using Bing API. </li>
                                </ul>
                            </div>
                        </div>
                        <div id="FishAiDiv" className={styles.image}>
                            <img src={fishAiIcon} width="15%"/>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.project}>
                            <h3><a className={styles.projectText} href="https://github.com/ah-lai/ME-380"  target="_blank">6-DOF Stewart Platform</a></h3>
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> Arduino (C++) </span></div>
                                <div class="skill"><span class="skillText"> PS3 Controller </span></div>
                                <div class="skill"><span class="skillText"> SOLIDWORKS </span></div>
                            </div>
                            <div className={styles.description}>
                                <h5> 
                                    6 degrees of freedom Stewart Platform controlled by a PS3 Controller and Arduino used to solve a ball maze.
                                </h5>
                                <br></br>
                                <ul className={styles.projectinfo} >
                                    <li>Programmed inverse kinematics in microcontroller (Arduino) to calculate several servo motor angles from inputs of a PS3 Controller to move the platform in the desired position. </li>
                                    <li>Modelled the platform in SOLIDWORKS where parts were 3D-printed and laser cut.  </li>
                                </ul>
                            </div>
                        </div>
                        <div id="stewardplatform" className={styles.image}>
                            <img src={stewartplatform} width="25%"/>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.project}>
                            <h3><a className={styles.projectText} href="https://github.com/ah-lai/Almost-an-RPG"  target="_blank">Almost an RPG</a></h3>
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> C++ </span></div>
                                <div class="skill"><span class="skillText"> SFML </span></div>
                            </div>
                            <div className={styles.description}>
                                <h5>
                                    2D role playing video game in C++ using the SFML library and developed using OOP principles.
                                </h5>
                                <br></br>
                                <ul className={styles.projectinfo} >
                                    <li>Game consists of 4 different types of enemies with simple AI, boss rooms, a shop to buy power ups using gold collection.</li>
                                </ul>
                            </div>
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