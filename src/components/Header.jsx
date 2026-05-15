import { Book } from '@boxicons/react';
import styles from './Header.module.css'

export default function Header() {

  return (
    <>
      <section className={styles.header}>

          <div className={styles.logo}>
              <Book className={styles.icon}/>
              <div>
                <h1>Busoga High School</h1>
                <p>Kamuli, Uganda</p>
              </div>
          </div>

        <nav>
          <div className={styles.navLinks}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#news">News & Events</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  )
}


