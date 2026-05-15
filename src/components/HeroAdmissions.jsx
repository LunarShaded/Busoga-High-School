import styles from './HeroAdmissions.module.css'
import { SealCheck } from '@boxicons/react';
import { ClipboardDetail } from '@boxicons/react';
import { User } from '@boxicons/react';
import { Phone } from '@boxicons/react';
import { Envelope } from '@boxicons/react';

export default function HeroAdmissions(){
    return(
        <>
          <section id="admissions" className={styles.admissionsSection}>

            {/* Main heading */}
             <div className={styles.mainTitle}>
              <h1>Admissions</h1>
              <p>Join our community of learners and embark on a journey of academic excellecne</p>
             </div>

             {/* Admission cards */}

             <div className={styles.cardsBox}>

               {/* Requirements */}
               <div className={styles.applicationCard}>
                 <div className={styles.admissionTitle}>
                   <SealCheck className={styles.titleIcon}/>
                   <h2>Application Requirements</h2>
                 </div>

                 <div className={styles.requirementsText}>
                   <p>To apply for admission to Busoga High School, please ensure you<br/>
                   have the following documents:</p>
                 </div>

                 <div className={styles.requirementsList}>
                  <ul>
                    <li><SealCheck className={styles.listIcon}/> Completed application form</li>
                    <li><SealCheck className={styles.listIcon}/> Primary Leaving Examination (PLE) certificate</li>
                    <li><SealCheck className={styles.listIcon}/> Birth certificate or statutory declaration of age</li>
                    <li><SealCheck className={styles.listIcon}/> Passport-size photographs (4 copies)</li>
                    <li><SealCheck className={styles.listIcon}/> Medical examination report</li>
                    <li><SealCheck className={styles.listIcon}/> Transfer certificate (if from another school)</li>
                    <li><SealCheck className={styles.listIcon}/> Application fee payment receipt</li>
                  </ul>
                 </div>

               </div>

                 {/* Application process */}

               <div className={styles.applicationCard}>
                  <div className={styles.admissionTitle}>
                    <ClipboardDetail className={styles.titleIcon}/>
                    <h2>Application Process</h2>
                  </div>

                  <div className={styles.processList}>
                    <div className={styles.listItem}>
                      <div className={styles.listCount}>1</div>
                      <div>
                        <h3>Download Application Form</h3>
                        <p>Get the official application form below</p>
                      </div>
                    </div>

                    <div className={styles.listItem}>
                      <div className={styles.listCount}>2</div>
                      <div>
                        <h3>Complete & Submit</h3>
                        <p>Fill out the form and submit with required documents</p>
                      </div>
                    </div>

                    <div className={styles.listItem}>
                      <div className={styles.listCount}>3</div>
                      <div>
                        <h3>Assessment & Interview</h3>
                        <p>Attend placement assessment and interview</p>
                      </div>
                    </div>

                    <div className={styles.listItem}>
                      <div className={styles.listCount}>4</div>
                      <div>
                        <h3>Admission Decision</h3>
                        <p>Recieve admission decision and enrollment information</p>
                      </div>
                    </div>
                  </div>
            
               </div>
             </div>

             {/* Admissions office */}


             <div className={styles.officeCard}>
                <div className={styles.officeIconBox}><User className={styles.officeIcon}/></div>

                <div className={styles.officeText}>
                 <h2>Admissions Office</h2>
                 <p>Have questions about the admissions process? Our admissions team is here to help</p>
                </div>

                {/* Contact info */}

                <div className={styles.contactBox}>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactIconBox}>
                     <Phone className={styles.contactIcon}/>
                    </div>
                    
                    <h3>Phone</h3>
                    <p>+xxx-xxx-xxx</p>
                    <p>Monday - Friday, 8:00 AM - 5:00 PM</p>
                  </div>

                  <div className={styles.contactInfo}>
                    <div className={styles.contactIconBox}>
                     <Envelope className={styles.contactIcon}/>
                    </div>
                    
                    <h3>Email</h3>
                    <p>examplemail222@gmail.com</p>
                    <p>We respond within 24 hours</p>
                  </div>
                </div>

             </div>
          </section>
        </>
    )
}