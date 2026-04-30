import { Book } from '@boxicons/react';
import styles from './Header.module.css'

export default function Header() {


  return (
    <>
      <section className={styles.header}>
        <nav>
          <div className={styles.logo}>
              <h1>Busoga High School</h1>
              <p>Kamuli, Uganda</p>
          </div>

          <div className={styles.navLinks}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">News & Events</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  )
}


