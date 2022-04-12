import Link from 'next/link';
import styles from '../styles/nav.module.css';
import { useState } from 'react';

export default function TopNav() {
    const [changed, setchanged] = useState(false);


    const toggleButton = () => {
        setchanged(!changed);
    };

    return (
        <nav className={styles.navContainer}>
            <div className={styles.hideButton}>
                <div
                    className={styles.navbarToggler}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleButton}
                >
                    <div
                        className={`${styles.bar1} ${changed ? styles.change : ""
                            }`}
                    ></div>
                    <div
                        className={`${styles.bar2} ${changed ? styles.change : ""
                            }`}
                    ></div>
                    <div
                        className={`${styles.bar3} ${changed ? styles.change : ""
                            }`}
                    ></div>
                </div>
            </div>
            <div className={`${styles.nav} ${changed ? styles.change :""}`} id="nav" >
                <Link href="/"><a className={styles.navLink} onClick={toggleButton}>Home</a></Link>
                <Link href="/projects"><a className={styles.navLink} onClick={toggleButton}>Projects</a></Link>    
                <Link href="https://github.com/keating916"><a className={styles.navLink} onClick={toggleButton} target="_blank" rel='noreferrer'>Github</a></Link>     
                <Link href="/files/pkResume.pdf"><a className={styles.navLink} onClick={toggleButton} target="_blank" rel="nofollow">Resume</a></Link>     

            </div>

            
        </nav>

    )
}
