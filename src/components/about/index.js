import React from 'react';
import styles from './styles.module.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component {
    render() {
        return(
            <section>
                <div id="about" class={styles.condiv}>
                    <h1 className={styles.name}>Hello and welcome!</h1>
                    <br></br>
                    <p className={styles.about}>
                        I’m Alvin, and I am currently an engineering student at the University of Waterloo with an option in Artificial Intelligence. I'm passionate and always eager to learn new technology!                       
                        <br></br>
                        <br></br>
                        I have strong problem solving skills and am diligent in self-learning, leading to me achieve a spot on the Dean's List in multiple semesters and an overall GPA of 3.9/4. 
                        As well, I have proven communication and leadership skills depicted through obtaining the Duke of Edinburgh Award and Toastmasters International Certification!                        
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