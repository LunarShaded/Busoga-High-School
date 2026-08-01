import styles from './AboutHero.module.css'
import { User } from '@boxicons/react';
import { Bullseye } from '@boxicons/react';
import { EyeAlt } from '@boxicons/react';
import { CheckShield } from '@boxicons/react';

export default function AboutHero(){
   return(
    <>
    
     <section id="about" className={styles.aboutSection}>

            {/* Students counter */}
       <div className={styles.studentsCount}>
        <div className={styles.studentsWrapper}>
          <User className={styles.icon}/>
           <div>
             <p className={styles.count}><strong>500+</strong></p>
             <p className={styles.studentsWord}>Students</p>
          </div>
        </div>
       </div>
            {/* Main heading */}
       <div className={styles.heroTitle}>
          <h1>About Busoga High School</h1>
          <p>A leading secondary education institution 
             committed to academic
             excellence and character development</p>
       </div>
            {/* About content */}
       <div className={styles.heroAbout}>
         {/* School history */}
           <div className={styles.heroHistory}>
            <h2>Our History</h2>
            <p>Busoga High School, located in Kamuli, Uganda, has long been a place of learning, growth, and opportunity. 
              Founded with the vision of empowering young minds, the school has guided generations of students toward brighter futures.</p>

            <p>Through dedication to education, discipline, and community values,
               Busoga High School continues to shape responsible and ambitious individuals
               ready to make a difference in the world.</p>
         </div>
         
             {/* Mission & vision */}

         <div className={styles.heroMission}>
           
            <div className={styles.missionSector}>
               <Bullseye className={styles.iconParagraph}/>
               <div>
                <h2>Our Mission</h2>
                <p>To provide quality, holistic education that develops intellectual capacity, moral
                   character, and practical skills for responsible citizenship.</p>
               </div>
            </div>
           <div className={styles.visionSector}>
               <EyeAlt className={styles.iconParagraph}/>
            <div>
               <h2>Our Vision</h2>
               <p>To be a center of academic excellence that produces well-rounded individuals equipped
                  to contribute meaningfully to national and global development.</p>
            </div>
           </div>
      
        </div>
       </div>

       {/* Accreditation section */}

       <div className={styles.accreditation}>
         <div className={styles.accreditationWrapper}>
            <div className={styles.iconWrapper}>
            <CheckShield className={styles.checkIcon}/>
            </div>
            <h1>Accreditation</h1>
            <p>Busoga High School is fully accredited by the <strong>Uganda Ministry of Education and Sports</strong>, 
               ensuring our curriculum meets the highest national standards for secondary education.</p>
         </div>
       </div>

     </section>

    </>
   )
}