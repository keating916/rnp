import { useState, useEffect } from 'react';

import projectData from "../components/projects/projectsjson"

import ProjectCard from "../components/projectCard"

import styles from '../styles/projects.module.css'

const projects = () => {
    const [ popout, setPopout ] = useState("");

    const handleClick = (tgt) => {
        setPopout(tgt)
    }

    const handleClose = () => {
        setPopout("");
    }

    useEffect(() => {
        if (popout !== "") {
            document.body.classList.add('locked');
          } else {
            document.body.classList.remove('locked');
          }
    }, [popout])
    

    return (
        <>   
            <h2 className={styles.headers}>Little Projects</h2>
            <div className={`${styles.cardContainer} ${popout != "" ? styles.opened : ""}`}>
                
                {projectData.map((project, index) => {
                    return(
                        <ProjectCard key={index} item={project} currentProject={popout} handleClick={handleClick} handleClose={handleClose} />
                    )
                    
                })}
            </div>
            <h2 className={styles.headers}>Websites</h2>
            <div className={styles.cardContainer}>
                <a href="https://rlsgogreen.com" target="_blank" className={styles.siteCard}>
                    <div className={styles.cardDiv}>
                        <h3>RLS</h3>
                        <hr />
                    </div>
                    <div className={styles.cardDiv}>
                        <p>Custom Built Portfolio and contact Site for Folsom based Regional Landscaping Services</p>
                    </div>
                    <div className={styles.cardDiv}>
                        <p>NextJS - CSS3 - GraphQL</p>
                    </div>
                    
                </a>
                <a href="https://gandcseptic.com" target="_blank" className={styles.siteCard}>
                    <div className={styles.cardDiv}>
                        <h3>G&amp;C Septic Services</h3>
                        <hr />
                    </div>
                    <div className={styles.cardDiv}>
                        <p>Custom Built Portfolio and informational site for G&amp;C Septic Services in Wilton, CA</p>
                    </div>
                    <div className={styles.cardDiv}>
                        <p>PHP - CSS3 - Apache</p>
                    </div>
                    

                </a>
                <div href="https://adventurervnapa.com" target="_blank" className={styles.siteCard}>
                    <div className={styles.cardDiv}>
                        <h3>Adventure RV Napa</h3>
                        <hr />
                    </div>
                    <div className={styles.cardDiv}>
                        <p>On Site SEO for RV Dealership in Napa, CA as well as Youtube channel and social media management</p>
                    </div>
                    <div className={styles.cardDiv}>
                        <p>Video Editing - Social Media - SEO</p>
                    </div>
                    

                </div>
                <a href="https://acmeoutdoorpower.com" target="_blank" className={styles.siteCard}>
                    <div className={styles.cardDiv}>
                        <h3>ACME Power Tools</h3>
                        <hr />
                    </div>
                    <div className={styles.cardDiv}>
                        <p>SEO and ad campaigns for Acme Saw and Supply, with stores from Placerville to Stockton</p>
                    </div>
                   <div className={styles.cardDiv}>
                       <p>SEO - AdWords - Keyword Research</p>
                   </div>
                    
                </a>
                
            </div>
        </> 
    )
}

export default projects