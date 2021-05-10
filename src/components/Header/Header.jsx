import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
  const [selected, setSelected] = useState('1')
  const [goingUp, setGoingUp] = useState(false);

  const prevScrollY = useRef(0);
  const windowWidth = window.outerWidth

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if(windowWidth <= 375) {
        if(currentScrollY >= 0 ) {
          setSelected('1')
        }
        if(currentScrollY > 150) {
          setSelected('2')
        }
        if(currentScrollY > 1500) {
          setSelected('3')
        }
        if(currentScrollY > 3000) {
          setSelected('4')
        }
        if (prevScrollY.current < currentScrollY && goingUp) {
          setGoingUp(false);
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);
        }
      } else {
        if(currentScrollY >= 0 ) {
          setSelected('1')
        }
        if(currentScrollY > 300) {
          setSelected('2')
        }
        if(currentScrollY > 950) {
          setSelected('3')
        }
        if(currentScrollY > 1850) {
          setSelected('4')
        }
        if (prevScrollY.current < currentScrollY && goingUp) {
          setGoingUp(false);
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);
        }
      }

      prevScrollY.current = currentScrollY;
      console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const selectedButton = e => {
    e.preventDefault()
    setSelected(e.target.id)
  }
  // console.log(selected)
  return (
    <header className={styles.container}>
      <div className={styles.links}>
        <a
          className={selected === "1" ? styles.selec : styles.link}
          onClick={(e) => {selectedButton(e); document.getElementById('home').scrollIntoView({behavior: "smooth"})}}
          id="1"
          href="."
        >
          Home
        </a>
        <a
          className={selected === "2" ? styles.selec : styles.link}
          onClick={(e) => {selectedButton(e); document.getElementById('projects').scrollIntoView({behavior: "smooth"})}}
          id="2"
          href="."
        >
          Projects
        </a>
        <a
          className={selected === "3" ? styles.selec : styles.link}
          onClick={(e) => {selectedButton(e); document.getElementById('about').scrollIntoView({behavior: "smooth"})}}
          id="3"
          href="."
        >
          About
        </a>
        <a
          className={selected === "4" ? styles.selec : styles.link}
          onClick={(e) => {selectedButton(e); document.getElementById('contact').scrollIntoView({behavior: "smooth"})}}
          id="4"
          href="."
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header
