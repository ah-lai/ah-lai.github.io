import React from 'react';
import styles from './styles.module.css';

class Intro extends React.Component {
    render() {
        return(
            <section>
                <div id="Intro" className={styles.intro}>
                    <div className={styles.background}>
                        <div className={styles.container}> 
                            <h1> ALVIN LAI </h1>
                            <h3> University of Waterloo - Engineering </h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Intro