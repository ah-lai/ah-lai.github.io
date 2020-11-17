import React from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component {
    render() {
        return(
            <section>
                <div id="about" class={styles.condiv}>
                    <h1 className={styles.name}>Hi and welcome!</h1>
                    <br></br>
                    <p className={styles.about}>
                        I am currently an engineering student at the University of Waterloo with an option in Artificial Intelligence. I'm passionate and always eager to learn new technology!  
                        <br></br>
                        <br></br>
                        I have strong problem solving skills and diligent in self-learning; leading to me achieve Dean's List for multiple semsters and an overall GPA of 3.9/4. 
                        As well, I have proven communication and leadership skills shown by obtaining Duke of Edinburgh Award and Toastmasters International Certification!
                        <br></br>
                        <br></br>

                        Skills: 

                        <br></br>
                        <br></br>
                        <Button variant="primary">RESUME</Button>{' '}
                    </p>
                </div>
            </section>
        )
    }
}

export default About