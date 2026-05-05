import styles from './AboutHero.module.css'
import { User } from '@boxicons/react';
import { Bullseye } from '@boxicons/react';
import { EyeAlt } from '@boxicons/react';
import { CheckShield } from '@boxicons/react';

export default function AboutHero(){
   return(
    <>
    
     <section className={styles.aboutSection}>

       <div className={styles.studentsCount}>
        <div className={styles.studentsWrapper}>
          <User className={styles.icon}/>
           <div>
             <p className={styles.count}><strong>100+</strong></p>
             <p className={styles.studentsWord}>Students</p>
          </div>
        </div>
       </div>

       <div className={styles.heroTitle}>
          <h1>About Busoga High School</h1>
          <p>A leading secondary education institution 
             committed to academic<br/>
             excellence and character development</p>
       </div>

       <div className={styles.heroAbout}>
           <div className={styles.heroHistory}>
            <h2>Our History</h2>
            <p>Busoga High School, located in Kamuli, Uganda, has long been a place of learning, growth, and opportunity. <br/>
              Founded with the vision of empowering young minds, the school has guided generations of students toward brighter futures.<br/></p>

            <p>Through dedication to education, discipline, and community values,<br/>
               Busoga High School continues to shape responsible and ambitious individuals<br/>
               ready to make a difference in the world.</p>
         </div>
         
             

         <div className={styles.heroMission}>
           
            <div className={styles.missionSector}>
               <Bullseye className={styles.iconParagraph}/>
               <div>
                <h2>Our Mission</h2>
                <p>To provide quality, holistic education that develops intellectual capacity, moral<br/>
                   character, and practical skills for responsible citizenship.</p>
               </div>
            </div>
           <div className={styles.visionSector}>
               <EyeAlt className={styles.iconParagraph}/>
            <div>
               <h2>Our Vision</h2>
               <p>To be a center of academic excellence that produces well-rounded individuals equipped<br/>
                  to contribute meaningfully to national and global development.</p>
            </div>
           </div>
      
        </div>
       </div>

       <div className={styles.accreditation}>
         <div className={styles.accreditationWrapper}>
            <div className={styles.iconWrapper}>
            <CheckShield className={styles.checkIcon}/>
            </div>
            <h1>Accreditation</h1>
            <p>Kitante Hill School is fully accredited by the Uganda Ministry of Education and Sports, 
               ensuring our curriculum meets the highest<br/> national standards for secondary education.</p>
         </div>
       </div>

     </section>

    </>
   )
}