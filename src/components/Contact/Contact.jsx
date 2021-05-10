import React from 'react'
import up from '../../assets/static/up-arrow-2.svg'
import styles from './Contact.module.scss'
import github from '../../assets/static/personaje-github.svg'
import linkedin from '../../assets/static/linkedin-5.svg'
import whatsapp from '../../assets/static/whatsapp-2.svg'

const Contact = () => {
  return (
    <div id='contact' className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.icons}>
        <a href='https://github.com/flavianodiberardino' target='_blank' rel='noreferrer' className={styles.iconCont}>
          <img src={github} alt='github' className={styles.icon}/>
        </a>
        <a href='https://www.linkedin.com/in/flavianodiberardino-js/' target='_blank' rel='noreferrer' className={styles.iconCont}>
          <img src={linkedin} alt='linkedin' className={styles.icon}/>
        </a>
        <a href='https://wa.me/5491124543732' target='_blank' rel='noreferrer' className={styles.iconCont}>
          <img src={whatsapp} alt='google' className={styles.icon}/>
        </a>
      </div>
      <div className={styles.copy}>
        <p>© 2021 Flaviano Di Berardino</p>
      </div>
      <img src={up} alt='me' className={styles.up} onClick={() => document.getElementById('home').scrollIntoView({behavior: "smooth"})}/>
    </div>
  )
}

export default Contact
