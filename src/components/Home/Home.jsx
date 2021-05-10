import React from 'react'
import styles from './Home.module.scss'
import fla from '../../assets/static/out-2.PNG'

const Home = () => {
  return (
    <div id='home' className={styles.container}>
      <img src={fla} alt='me' />
      <h1 className={styles.title}>Hello! My name is Flaviano</h1>
      <span>Welcome to my portfolio.</span>
      <p className={styles.info}>
        I'm a Full Stack Web Developer with great ability to solve problems
        effectively. 
      </p>
    </div>
  )
}

export default Home
