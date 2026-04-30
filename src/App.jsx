import { Book } from '@boxicons/react';
import './App.css'

function App() {


  return (
    <>
      <section id='header'>
        <nav>
          <div className='logo'>
            <div>
              <Book/>
            </div>
            <h1>Busoga High School</h1>
            <p>Kamuli, Uganda</p>
          </div>

          <div className='nav-links'>
            <ul>
              <a href='#'><li>Home</li></a>
              <a href='#'><li>About</li></a>
              <a href='#'><li>Academics</li></a>
              <a href='#'><li>Admissions</li></a>
              <a href='#'><li>News & Events</li></a>
              <a href='#'><li>Contact</li></a>
            </ul>
          </div>
        </nav>
      </section>
    </>
  )
}

export default App
