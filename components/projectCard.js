import Image from "next/image";

import styles from '../styles/projects.module.css'

const ProjectCard = (props) => {
    let project = props.currentProject
    const item = props.item;
    return(
        <div>
            <div className={styles.card} onClick={() => props.handleClick(item.id)}>
                <div className={styles.cardImgHolder}>
                    <Image src={item.img} alt={item.title} className={styles.cardImg} layout="responsive" width={100} height={60} />
                </div>
                
                <div className={styles.cardDescription}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
            <div className={`${item.id === project ? styles.overlay : styles.hidden}`}>
                <div className={`${styles.projectContainer} ${item.id === project ? styles.popup : styles.hidden}`}>
                    <button type="close" className={styles.close} id={item.id} onClick={props.handleClose}>X</button>
                    <div className={styles.functionContents}>
                        <item.func class="function" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard