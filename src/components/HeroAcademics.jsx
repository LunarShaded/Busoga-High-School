import styles from './HeroAcademics.module.css'
import { BookOpen } from '@boxicons/react';
import { Trophy } from '@boxicons/react';
import { Science } from '@boxicons/react';
import { Palette } from '@boxicons/react';
import { GlobeAlt3 } from '@boxicons/react';
import { Server } from '@boxicons/react';
import { Calculator } from '@boxicons/react';
import { Group } from '@boxicons/react';

export default function HeroAcademics(){
    return(
        <>
          <section id="academics" className={styles.academicsSection}>

            {/* Main heading */}
            <div className={styles.mainTitle}>
                <h1>Academics Excellence</h1>
                <p>Comprehensive curriculum designed to prepare students for higher education<br/>and succesful careers</p>
            </div>

            {/* Academic programs */}

            <div className={styles.boxCard}>

                {/* O-Level */}
                <div className={styles.firstCard}>
                  <div className={styles.programTitle}>
                    <BookOpen className={styles.bookIcon}/>
                    <h2>O-Level Program</h2>
                  </div>
                   <div className={styles.academicText}>
                     <p>Our Ordinary Level program (S1-S4) provides a strong foundation in<br/>
                        core subjects, preparing students for the Uganda Certificate of<br/>
                        Education (UCE) examinations.</p>
                   </div>

                   <div className={styles.academicList}>
                     <ul className={styles.programList}>
                        <li>4-year comprehensive program</li>
                        <li>Core subjects + elecitves</li>
                        <li>Continuous assessment</li>
                        <li>UCE examination preparation</li>
                     </ul>
                   </div>
                  
                </div>

                {/* A-Level */}

                <div className={styles.secondCard}>
                  <div className={styles.programTitle}>
                    <Trophy className={styles.trophyIcon}/>
                    <h2>A-Level Program</h2>
                  </div>
                   <div className={styles.academicText}>
                     <p>Our Advanced Level program (S5-S6) offers specialized study in<br/>
                        chosen subject combinations, leading to the Uganda Advanced <br/>
                        Certificate of Education (UACE).</p>
                   </div>

                   <div className={styles.academicList}>
                     <ul className={styles.programList}>
                        <li>2-year specialized program</li>
                        <li>Subject combinations available</li>
                        <li>University preparation focus</li>
                        <li>UACE examination preparation</li>
                     </ul>
                   </div>

                </div>
            </div>
            
            {/* Departments */}

            <div className={styles.departmentsTitle}>
                <h1>Our Departments</h1>
            </div>

            <div className={styles.departments}>
                <div className={styles.departmentCard}>
                   <div className={styles.departmentCardTitle}>
                    <Science className={styles.departmentIcon}/>
                    <h2>Sciences</h2>
                   </div>
                   <ul className={styles.studyList}>
                      <li>Physics</li>
                      <li>Chemistry</li>
                      <li>Biology</li>
                      <li>Mathematics</li>
                   </ul>
                </div>
                
                <div className={styles.departmentCard}>
                   <div className={styles.departmentCardTitle}>
                    <Palette className={styles.departmentIcon}/>
                    <h2>Arts & Humanities</h2>
                   </div>
                   <ul className={styles.studyList}>
                      <li>Literature</li>
                      <li>History</li>
                      <li>Geography</li>
                      <li>Religious Education</li>
                   </ul>
                </div>

                <div className={styles.departmentCard}>
                   <div className={styles.departmentCardTitle}>
                    <GlobeAlt3 className={styles.departmentIcon}/>
                    <h2>Languages</h2>
                   </div>
                   <ul className={styles.studyList}>
                      <li>English</li>
                      <li>Luganda</li>
                      <li>French</li>
                      <li>Kiswahili</li>
                   </ul>
                </div>

                <div className={styles.departmentCard}>
                   <div className={styles.departmentCardTitle}>
                    <Server className={styles.departmentIcon}/>
                    <h2>ICT & Technology</h2>
                   </div>
                   <ul className={styles.studyList}>
                      <li>Computer Studies</li>
                      <li>Technical Drawing</li>
                      <li>Electronics</li>
                   </ul>
                </div>

                <div className={styles.departmentCard}>
                   <div className={styles.departmentCardTitle}>
                    <Calculator className={styles.departmentIcon}/>
                    <h2>Mathematics</h2>
                   </div>
                   <ul className={styles.studyList}>
                      <li>Pure Mathematics</li>
                      <li>Applied Mathematics</li>
                      <li>Statistics</li>
                   </ul>
                </div>
            </div>

            {/* Activities */}


            <div className={styles.activities}>
                <div className={styles.activitiesWrapper}>

                    <div className={styles.activitiesIconElement}>
                      <Group className={styles.activitiesIcon}/>
                    </div>

                    <div className={styles.activitiesTitle}>
                        <h2>Extracurricular Activites</h2>
                        <p>Beyond academics, we offer diverse opportunities for personal growth and skill development</p>
                    </div>

                    <div className={styles.activitiesList}>
                        <div className={styles.activitiesItem}>Football & Netball Teams</div>
                        <div className={styles.activitiesItem}>Debate Society</div>
                        <div className={styles.activitiesItem}>Drama Club</div>
                        <div className={styles.activitiesItem}>Science Club</div>
                        <div className={styles.activitiesItem}>Student Council</div>
                        <div className={styles.activitiesItem}>Music & Dance</div>
                        <div className={styles.activitiesItem}>Environmental Club</div>
                        <div className={styles.activitiesItem}>First Aid Club</div>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}