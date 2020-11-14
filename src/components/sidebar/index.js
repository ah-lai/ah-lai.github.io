import React from 'react';
import styles from './styles.module.css';
import SocialMedia from '../socialmedia'
import { Link, animateScroll as scroll } from 'react-scroll'

class Sidebar extends React.Component{
    render () {
        return (
        <div className={styles.row}>
            <div>
                <div>
                    Profile Pic 
                </div>
                <div>
                    <h1>Alvin Lai</h1>
                </div>
                <div className={styles.line}></div>
                <SocialMedia></SocialMedia>
                <br></br>
                <br></br>
                <div>
                    <ul>
                        <li className={styles.nav}><Link activeClass={styles.active} to="about" spy={true} smooth={true} duration={500} >About</Link></li>
                        <li className={styles.nav}><Link activeClass={styles.active} to="projects" spy={true} smooth={true} duration={500} >Projects</Link></li>
                        <li className={styles.nav}><Link activeClass={styles.active} to="experience" spy={true} smooth={true} duration={500} >Experience</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Sidebar