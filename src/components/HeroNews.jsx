import styles from './HeroNews.module.css'
import { BookOpen } from '@boxicons/react';
import { Trophy } from '@boxicons/react';
import { User } from '@boxicons/react';
import { Calendar } from '@boxicons/react';
import { Clock } from '@boxicons/react';

export default function HeroNews() {
    return (
        <>
            <section className={styles.NewsSection}>
                <div className={styles.mainTitle}>
                    <h1>News & Events</h1>
                    <p>Stay updated with the latest news, achievements, and upcoming events at Busoga High School</p>
                </div>

                <div className={styles.NewsEventBox}>


                    <div className={styles.newsBox}>
                        <div className={styles.topTitle}>
                            <BookOpen className={styles.titleIcon} />
                            <h2>Latest News</h2>
                        </div>

                        <div className={styles.newsCard}>

                                <div className={styles.cardIconBox}>

                                    <Trophy className={styles.cardIcon}/>

                                </div>

                            <div className={styles.cardTitle}>

                                <div className={styles.cardTitleContent}>

                                    <div className={styles.titleLight}>
                                        
                                       <p>Academic Achievement</p>

                                    </div>

                                    <div className={styles.cardDateTitle}>

                                       <Clock className={styles.clockIcon}/>
                                       <p>March 15, 2025</p>

                                    </div>

                                </div>                           

                                    <div className={styles.cardContent}>
                                        <h3>Excellent UCE Results 2024</h3>
                                         
                                        <p>Busoga High School achieves 95% pass rate in Uganda<br/> Certificate of Education examinations.</p>
                                    </div>

                             </div>
                        </div>

                        <div className={styles.newsCard}>

                                <div className={styles.cardIconBox}>

                                    <BookOpen className={styles.cardIcon}/>

                                </div>

                            <div className={styles.cardTitle}>

                                <div className={styles.cardTitleContent}>

                                    <div className={styles.titleLight}>
                                        
                                       <p>Infrastructure</p>
                                       
                                    </div>

                                    <div className={styles.cardDateTitle}>

                                       <Clock className={styles.clockIcon}/>
                                       <p>February 28, 2025</p>

                                    </div>

                                </div>                           

                                    <div className={styles.cardContent}>
                                        <h3>New Science Laboratory Opened</h3>
                                         
                                        <p>State-of-the-art chemistry and physics laboratory now<br/> 
                                           available for advanced practical sessions.</p>
                                    </div>

                             </div>
                        </div>

                        <div className={styles.newsCard}>

                                <div className={styles.cardIconBox}>

                                    <User className={styles.cardIcon}/>

                                </div>

                            <div className={styles.cardTitle}>

                                <div className={styles.cardTitleContent}>

                                    <div className={styles.titleLight}>
                                        
                                       <p>Extracurricular</p>
                                       
                                    </div>

                                    <div className={styles.cardDateTitle}>

                                       <Clock className={styles.clockIcon}/>
                                       <p>February 10, 2025</p>

                                    </div>

                                </div>                           

                                    <div className={styles.cardContent}>
                                        <h3>Inter-School Debate Championship</h3>
                                         
                                        <p>Our debate team emerges victorious in the regional inter-<br/> 
                                           school debate championship.</p>
                                    </div>

                             </div>
                        </div>
                    </div>

    
                    <div className={styles.eventsBox}>
                        <div className={styles.topTitle}>
                            <Calendar className={styles.titleIcon} />
                            <h2>Upcoming Events</h2>
                        </div>

                        <div className={styles.eventCard}>

                            <div className={styles.eventSection}>

                             <div className={styles.eventContent}>

                                <div className={styles.eventTitle}>                          

                                    <h3>Term 2 Begins</h3>
                                    <p className={styles.eventLight}>Academic</p>

                                </div>

                                
                                
                                <div className={styles.eventDate}>
                                    <div className={styles.date}>

                                        <Calendar className={styles.eventDateIcon}/>
                                        <p>May 6, 2025</p>

                                    </div>

                                    <div className={styles.dateTime}>
                                        <Clock className={styles.eventDateIcon}/>
                                        <p>8:00 AM</p>
                                    </div>

                                </div>

                             </div>

                            </div>

                            <div className={styles.eventSection}>

                             <div className={styles.eventContent}>

                                <div className={styles.eventTitle}>                          

                                    <h3>PTA Meeting</h3>
                                    <p className={styles.eventLight}>Community</p>

                                </div>

                                
                                
                                <div className={styles.eventDate}>
                                    <div className={styles.date}>

                                        <Calendar className={styles.eventDateIcon}/>
                                        <p>May 15, 2025</p>

                                    </div>

                                    <div className={styles.dateTime}>
                                        <Clock className={styles.eventDateIcon}/>
                                        <p>2:00 PM</p>
                                    </div>

                                </div>
                                
                             </div>

                             

                            </div>

                            <div className={styles.eventSection}>

                             <div className={styles.eventContent}>

                                <div className={styles.eventTitle}>                          

                                    <h3>Mid-Term Examinations</h3>
                                    <p className={styles.eventLight}>Academic</p>

                                </div>

                                
                                
                                <div className={styles.eventDate}>
                                    <div className={styles.date}>

                                        <Calendar className={styles.eventDateIcon}/>
                                        <p>June 10-14, 2025</p>

                                    </div>

                                    <div className={styles.dateTime}>
                                        <Clock className={styles.eventDateIcon}/>
                                        <p>All Day</p>
                                    </div>

                                </div>
                                
                             </div>

                             

                            </div>

                            <div className={styles.eventSection}>

                             <div className={styles.eventContent}>

                                <div className={styles.eventTitle}>                          

                                    <h3>Sports Day</h3>
                                    <p className={styles.eventLight}>Sports</p>

                                </div>

                                
                                
                                <div className={styles.eventDate}>
                                    <div className={styles.date}>

                                        <Calendar className={styles.eventDateIcon}/>
                                        <p>June 28, 2025</p>

                                    </div>

                                    <div className={styles.dateTime}>
                                        <Clock className={styles.eventDateIcon}/>
                                        <p>9:00 AM</p>
                                    </div>

                                </div>
                                
                             </div>

                             

                            </div>

                        </div>

                       <div className={styles.termDatesCard}>
                         <h2>2025 Term Dates</h2>
                           
                         <div className={styles.termStroke}>
                            <h3>Term 1</h3>
                            <p>Feb 5 - Apr 26, 2025</p>
                         </div>

                         <div className={styles.termStroke}>
                            <h3>Term 2</h3>
                            <p>May 6 - Aug 2, 2025</p>
                         </div>

                         <div className={styles.termStroke}>
                            <h3>Term 3</h3>
                            <p>Aug 26 - Nov 22, 2025</p>
                         </div>

                       </div>

                    </div>

                </div>
            </section>
        </>
    )
}