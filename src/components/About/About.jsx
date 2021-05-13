import React, { useLayoutEffect, useState } from 'react'
import { DiNodejsSmall } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiGithubAlt } from "react-icons/di";
import styles from './About.module.scss'

const About = () => {
  const [size, setSize] = useState(0)

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.outerWidth)
      console.log(size)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  })

  return (
    <div id='about' className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <p className={styles.p_white}>
      <span className={styles.span}> I believe in a world where every person can have an education and be successful doing what they like to do. </span> I love and enjoy learning new stuff whenever possible, and one thing that I enjoy the most is sharing the knowledge that I acquire with every person that I can, cause like I said, I believe in that world and love working for it.
      </p>
      <p className={styles.p_white}>
        I'm a guy who is passionate about new technologies, I recently did a four months boot camp and ended with +800 hours of coding. I learned a lot of things not only about coding but also about teamwork. My main technologies are <span className={styles.span}>JavaScript, NodeJS, ExpressJS, React-Redux, SQL, PostgreSQL and Sequelize</span>. I also know other tools such as <span className={styles.span}> SupaBase, HTML5, CSS3 and SASS.</span>
      </p>
        {
          size < 600
          ? <div className={styles.icons}>
              <div className={styles.tech}>
                <div>
                  <DiJavascript color='#fff' size='5rem'/>
                  <span style={{color: '#FF5D00'}}>JavaScript</span>
                </div>
                <div>
                  <DiHtml5 color='#FF5D00' size='5rem'/>
                  <span style={{color: '#fff'}}>HTML5</span>
                </div>
                <div>
                  <DiCss3 color='#fff' size='5rem'/>
                  <span style={{color: '#FF5D00'}}>CSS3</span>
                </div>
              </div>
              <div className={styles.tech}>
                <div>
                  <DiNodejsSmall color='#FF5D00' size='5rem'/>
                  <span  style={{color: '#fff'}}>NodeJS</span>
                </div>
                <div>
                  <DiReact color='#fff' size='5rem' style={{marginLeft: '1.5rem'}}/>
                  <span  style={{color: '#FF5D00', marginLeft: '1.5rem'}}>React</span>
                </div>
                <div>
                  <DiPostgresql color='#FF5D00' size='5rem'/>
                  <span  style={{color: '#fff'}}>PostgreSQL</span>
                </div>
              </div>
            </div>
          : <div className={styles.icons}>
              <div className={styles.tech}>
                <DiJavascript color='#fff' size='5rem'/>
                <span style={{color: '#FF5D00'}}>JavaScript</span>
              </div>
              <div className={styles.tech}>
                <DiHtml5 color='#FF5D00' size='5rem'/>
                <span style={{color: '#fff'}}>HTML5</span>
              </div>
              <div className={styles.tech}>
                <DiCss3 color='#fff' size='5rem'/>
                <span style={{color: '#FF5D00'}}>CSS3</span>
              </div>
              <div className={styles.tech}>
                <DiNodejsSmall color='#FF5D00' size='5rem'/>
                <span  style={{color: '#fff'}}>NodeJS</span>
              </div>
              <div className={styles.tech}>
                <DiReact color='#fff' size='5rem'/>
                <span  style={{color: '#FF5D00'}}>React</span>
              </div>
              <div className={styles.tech}>
                <DiPostgresql color='#FF5D00' size='5rem'/>
                <span  style={{color: '#fff'}}>PostgreSQL</span>
              </div>
            </div>
        }
    </div>
  )
}

export default About
