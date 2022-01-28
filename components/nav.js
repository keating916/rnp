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
                <Link href="/commercial"><a className={styles.navLink} onClick={toggleButton}>Commercial Services</a></Link>
                <Link href="/contact"><a className={styles.navLink} onClick={toggleButton}>Contact</a></Link>                
                <p className={styles.navPhone}>Call us: <a id={styles.phoneLink} href="tel:5304171540"><img src={'/white-phone.png'} width={25} height={25} className={styles.icon} alt="phone icon" />530-417-1540</a></p>

            </div>

            
        </nav>

    )
}
