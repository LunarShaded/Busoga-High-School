import { Book } from '@boxicons/react';
import styles from './Hero.module.css'
import photo from '/src/assets/photo/BusogaSchool.jpg'

export default function Hero(){
    return(
        <>
          <section className={styles.heroSector}>
            <div className={styles.heroInfo}>
                <h1>Busoga <br/>High School</h1>
                <p className={styles.subtitle}>Excellence in High Education</p>

                <p className={styles.description}>Empowering young minds through quality education, character<br/> 
                development, and academic excellence in the heart of Kamuli,<br/> 
                Uganda.
                </p>

             <div className={styles.btnSector}>
                <a href='#' className={styles.applyBtn}>Apply Now</a>
                <a href='#' className={styles.contactBtn}>Contact Us</a>
                <a href='#' className={styles.exploreBtn}>Explore Programs</a>
             </div>
            </div>

            <div className={styles.heroImg}>
               <img src={photo} alt="Busoga School"/>
            </div>

          </section>
        </>
    )
    
}