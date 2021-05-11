import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard'
import styles from './Project.module.scss'

const Project = () => {
  const projects = [
    {
      name: 'TechStore',
      description: `This is an e-commerce where you can buy anything from computers to its 
      components. It was made as the final project for Henry's Boot Camp. 
      The technologies that we used are React-Redux, Supabase and also Node.js with Express.`,
      link: 'https://henrystechstore.web.app/',
      github: 'https://github.com/henry-labs/ecommerce-FT10-G1'
    },
    {
      name: 'World Video Games',
      description: `This is a simple app that i made as individual project for Henry's Boot Camp.
      It's an app were you can find your favorite video games, you can see the its full info. I used React-Redux,
      PostgreSQL, Sequelize, NodeJS and Express.`,
      link: 'https://www.linkedin.com/in/flavianodiberardino-js/',
      github: 'https://github.com/flavianodiberardino/FT10-PI-Videogames'
    },
    // {
    //   name: 'TechStore',
    //   description: `This is an e-commerce where you can buy anything from computers to its 
    //   components. It was made as the final project for Henry's Bootcamp. 
    //   The tecnologies that we used are React-Redux, Supabase and also Node.js with Express.`,
    //   link: 'https://www.linkedin.com/in/flavianodiberardino-js/',
    //   github: 'https://github.com/flavianodiberardino'
    // },
    // {
    //   name: 'TechStore',
    //   description: `This is an e-commerce where you can buy anything from computers to its 
    //   components. It was made as the final project for Henry's Bootcamp. 
    //   The tecnologies that we used are React-Redux, Supabase and also Node.js with Express.`,
    //   link: 'https://www.linkedin.com/in/flavianodiberardino-js/',
    //   github: 'https://github.com/flavianodiberardino'
    // }
  ]
  return (
    <div className={styles.container} id='projects'>
      <h1 className={styles.title}>Projects</h1>
     <div className={styles.cards}>
      {
        projects.map(({name, description, link, github}) => (
          <ProjectCard name={name} description={description} link={link} github={github} />
        ))
      }
     </div>
    </div>
  )
}

export default Project
