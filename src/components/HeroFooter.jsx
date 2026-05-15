import styles from './HeroFooter.module.css'
import { BookOpen } from '@boxicons/react';
import { Location } from '@boxicons/react';
import { Phone } from '@boxicons/react';
import { EnvelopeAlt } from '@boxicons/react';

export default function HeroFooter(){
    return(
        <>
          <footer className={styles.footer}>

            {/* Footer wrapper */}
           <div className={styles.footerWrapper}>

            {/* Main footer content */}

            
            <div className={styles.footerContainer}>
              {/* School info column */}
                <div className={styles.footerColumn}>
                    <div className={styles.footerColumnTitle}>
                      <BookOpen className={styles.columnIcon}/>
                      <div className={styles.footerColumnTitleText}>
                         <h2>Busoga High School</h2>
                         <p>Excellence in Education</p>
                      </div>
                    </div>

                    <div className={styles.footerColumnText}>
                       <p>Busoga High School is one of Uganda’s historic secondary schools,<br/>
                          known for its strong academic tradition, discipline, and commitment to shaping future<br/>
                          leaders in the Busoga region and beyond. Established to provide quality education,<br/>
                          the school continues to inspire generations of students through excellence, character, and service.</p>
                    </div>
                      
                </div>

                 {/* Quick links */}

                <div className={styles.footerColumn}>
                    <div className={styles.footerColumnTitleText}>                    
                         <h2>Quick Links</h2>                     
                    </div>

                    <div className={styles.footerColumnList}>
                       <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About Us</a></li>
                        <li><a href='#academics'>Academics</a></li>
                        <li><a href='#admissions'>Admissions</a></li>
                        <li><a href='#news'>News & Eventss</a></li>
                        <li><a href='#contact'>Contact Us</a></li>
                       </ul>
                    </div>
                      
                </div>

                {/* Academic programs links */}

                <div className={styles.footerColumn}>
                    <div className={styles.footerColumnTitleText}>                    
                         <h2>Academic Programs</h2>                     
                    </div>

                    <div className={styles.footerColumnList}>
                       <ul>
                        <li><a href='#'>O-Level Program</a></li>
                        <li><a href='#'>A-Level Program</a></li>
                        <li><a href='#'>Examination Results</a></li>
                        <li><a href='#'>Academic Calendar</a></li>
                        <li><a href='#'>Fee Structure</a></li>
                        <li><a href='#'>Student Portal</a></li>
                       </ul>
                    </div>
                      
                </div>

                {/* Contact info */}

                <div className={styles.footerColumn}>
                    <div className={styles.footerColumnTitleText}>                    
                         <h2>Academic Programs</h2>                     
                    </div>

                    <div className={styles.infoList}>
                      <div className={styles.infoItem}>
                        <Location className={styles.infoIcon}/>
                        <div className={styles.addressItem}>
                          <p>W4FC+852</p>
                          <p>Kamuli, Uganda</p>
                        </div>
                      </div>

                      <div className={styles.infoItem}>
                        <Phone className={styles.infoIcon}/>
                        <p>+xxx xxx xxx</p>
                      </div>

                      <div className={styles.infoItem}>
                        <EnvelopeAlt className={styles.infoIcon}/>
                        <p>example@example.com</p>
                      </div>
                    </div>
                      
                </div>

                </div>

                {/* Bottom footer bar */}
          

            <div className={styles.bottomFooterContainer}>
              <div className={styles.leftItem}>
                <p>© 2026 Busoga High School. All rights reserved.</p>
              </div>

              <div className={styles.rightItem}>
                <ul>
                  <li><a href='#'>Privace Policy</a></li>
                  <li><a href='#'>Terms of Service</a></li>
                  <li><a href='#'>Sitemap</a></li>
                </ul>
              </div>
            </div>
           </div>
          </footer>
        </>
    )
}