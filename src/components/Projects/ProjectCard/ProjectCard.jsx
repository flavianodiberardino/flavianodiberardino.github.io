import React from 'react'
import githubIcon from '../../../assets/static/github-4.svg'
import linkIcon from '../../../assets/static/link-3.svg'
import styles from './ProjectCard.module.scss'

const ProjectCard = ({name, description, github, link}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{name}</h1>
      <p>{description}</p>
      <div className={styles.links}>
        <a href={github} target='_blank' rel='noreferrer'>
          <img src={githubIcon} alt={link} className={styles.link}></img>
        </a>
        <a href={link} target='_blank' rel='noreferrer'>
          <img src={linkIcon} alt={link} className={styles.link}></img>
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
