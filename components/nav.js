import Link from 'next/link';
import styles from '../styles/nav.module.css';
import { useState } from 'react';

import ContactForm from './ContactForm';

export default function TopNav() {
    const [changed, setchanged] = useState(false);
    const [ shown, setShown ] = useState(false);

    const toggleButton = () => {
        setchanged(!changed);
    };

    const openContact = () => {
        setShown(true);
    }

    const handleClose = () => {
        setShown(false);
    }

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
            <div
				className={`${styles.navBar} ${changed ? styles.change : ""}`}
				id="navbar"
			>
				<div className={styles.navBarDiv}>
					
                <Link href="/"><a className={styles.navLink} onClick={toggleButton}>Home</a></Link>
                <Link href="/projects"><a className={styles.navLink} onClick={toggleButton}>Projects</a></Link>    
                <Link href="https://github.com/keating916"><a className={styles.navLink} onClick={toggleButton} target="_blank" rel='noreferrer'>Github</a></Link>     
                <Link href="/files/pkResume.pdf"><a className={styles.navLink} onClick={toggleButton} target="_blank" rel="nofollow">Resume</a></Link> 
				</div>
				
			</div>
			<div>
				<p className={`${styles.changeCursor} ${styles.contactButton}`} onClick={openContact}>Contact</p>
				<a
					href="tel:9162970220"
					className={styles.navPhone}
					rel="referrer"
					id="navPhone"
				>
					Call me: 916-297-0220
				</a>
			</div>
            <div className={`${shown ? styles.overlay : styles.hidden}`}>
                <div className={`${styles.projectContainer} ${shown ? styles.popup : styles.hidden}`}>
                    <button type="close" className={styles.close} onClick={handleClose}>X</button>
                    <h1 style={{color:"white"}}>Contact Form</h1>
                    <ContactForm />
                </div>
            </div>
        </nav>

    )
}
