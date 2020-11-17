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
                        <b className={styles.skills}>Languages</b>: Python, C#, Javascript, C++, Java, SQL
                        <br></br>
                        <b className={styles.skills}>Databases</b>: MySQL, MongoDB
                        <br></br>
                        <b className={styles.skills}>Tools/Frameworks</b>: ASP.NET, React, Django, TensorFlow, Keras, AWS, Git, Docker
                        <br></br>
                        <b className={styles.skills}>Certifications</b>: Software Design & Architecture Specialization, IBM AI Engineering

                        <br></br>
                        <br></br>
                        <a class="btn btn-primary" role="button"  href="./resume.pdf" target="_blank">RESUME</a>
                    </p>
                </div>
            </section>
        )
    }
}

export default About