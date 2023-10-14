import React from 'react'
import styles from './portfolio.module.scss'
import Project from './Project'
import projects from '@/app/public/assets/projects'
const Portfolio = () => {
  return (
    <div className={styles.background}>
        <h1 className={styles.secTitle}>Our Projects</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent:"center"}}>
        {projects.map((project) => 
        <div style={{width:'40%', padding: '10px' }} key={project.id}>
          <Project 
        id={project.id} 
        title={project.title}
        img={project.img}
        desc={project.description}
        />
        </div>
        )};
        </div>
        
    </div>
  )
}

export default Portfolio