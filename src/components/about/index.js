import React from 'react';
import styles from './styles.module.css';

class About extends React.Component {
    render() {
        return(
            <section>
                <div id="about" class={styles.condiv}>
                    <h1 className={styles.name}>Hi! I'm Alvin Lai</h1>
                    <h3>Full Stack Web <u>Developer</u></h3>
                    <br></br>
                    <p className={styles.about}>
                        I am currently a engineering student at the University of Waterloo with a major in Mechanical Engineering and an option in 
                        Artificial Intelligence. I love learning about new technology and building new things! XXXXXXXXXXXXXXXX continue writing more l
                    </p>
                </div>
            </section>
        )
    }
}

export default About