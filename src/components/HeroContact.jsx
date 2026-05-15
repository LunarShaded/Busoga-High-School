import styles from './HeroContact.module.css'
import { Location } from '@boxicons/react';
import { Phone } from '@boxicons/react';
import { EnvelopeAlt } from '@boxicons/react';
import { Clock } from '@boxicons/react';
import { PaperPlane } from '@boxicons/react';

export default function HeroContact(){
    return(
        <>
        
         <section className={styles.contactSection}>
            <div className={styles.mainTitle}>
                <h1>Contact us</h1>
                <p>Get in touch with us for admissions, inquiries, or any questions about Busoga High<br/> School</p>
            </div>

            <div className={styles.contactBox}>
                <div className={styles.contactInfo}>
                  <h2>Get In Touch</h2>

                  <div className={styles.contactContent}>

                    <div className={styles.contactContentItem}>
                       <Location className={styles.contactIcon}/>
                        <div className={styles.contactContentTitle}>
                         <h3>Address</h3>
                         <p>W4FC+852</p>
                         <p>Kamuli, Uganda</p>
                        </div>
                    </div>

                    <div className={styles.contactContentItem}>
                       <Phone className={styles.contactIcon}/>
                        <div className={styles.contactContentTitle}>
                         <h3>Phone</h3>
                         <p>+xxx xxx xxx</p>
                        </div>
                    </div>

                    <div className={styles.contactContentItem}>
                       <Location className={styles.contactIcon}/>
                        <div className={styles.contactContentTitle}>
                         <h3>Email</h3>
                         <p>example@example.com</p>
                        </div>
                    </div>

                    <div className={styles.contactContentItem}>
                       <Location className={styles.contactIcon}/>
                        <div className={styles.contactContentTitle}>
                         <h3>Office Hours</h3>
                         <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                         <p>Saturday: 8:00 AM - 1:00 PM</p>
                         <p>Sunday: Closed</p>
                        </div>
                    </div>

                  </div>

                  <div className={styles.addressMapBox}>

                  <iframe className={styles.addressMap} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.300325312686!2d33.117814774473004!3d0.9232696627995303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177ea9a965555555%3A0x2c3ecd02e67b3c18!2z0JHQsNGB0L7Qs9CwINCl0LDQuSDQodC60YPQuw!5e0!3m2!1sru!2spl!4v1778840381353!5m2!1sru!2spl" 
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade">
                  </iframe>

                  </div>

                </div>

                

                <div className={styles.contactForm}>

                    <form className={styles.form}>
                        <h2>Send Us a Message</h2>
                        <div className={styles.formBox}>
                            <div className={styles.formItem}>
                                <p>Full Name *</p>
                                <input type='text' className={styles.input} placeholder='Your full name' required></input>
                            </div>

                            <div className={styles.formItem}>
                                <p>Email Address *</p>
                                <input type='email' className={styles.input} placeholder='your.email@example.com' required></input>
                            </div>

                            <div className={styles.formItem}>
                                <p>Phone Number *</p>
                                <input type='tel' className={styles.input} placeholder='+xxx xxx xxx xxx' required></input>
                            </div>

                            <div className={styles.formItem}>

                                <p>Subject *</p>

                            <select className={styles.contactSelect}>
                                 <option>Admissions Inquiry</option>
                                 <option>Academic Information</option>
                                 <option>Fee Structure</option>
                                 <option>General Inaquiry</option>
                                 <option>Other</option>
                            </select>

                            </div>

                        </div>

                        <div className={styles.bottomForm}>
                            <div className={styles.contactMessage}>
                                <p>Message *</p>
                                <textarea className={styles.textarea} placeholder='Please provide details about your inquiry...' required></textarea>
                            </div>

                            <button type='submit' className={styles.btn}><PaperPlane/> Send Message</button>
                        </div>
                    </form>

                </div>
             </div>
         </section>

        </>
    )
}