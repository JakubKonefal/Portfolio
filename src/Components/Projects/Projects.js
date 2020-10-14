import React, { useState } from 'react';
import './Projects.scss';
import Project from './Project';
import { teamManager, projects } from '../../utils/projects';
import ProjectIcon from '../../assets/img/project-icon.png';

const Projects = ({ language }) => {
  const [currentProject, setCurrentProject] = useState(teamManager);

  return (
    <section className="Projects">
      <div className="Projects__ScrollAnchor" />
      <div className="Projects__Divider" />
      <div className="Projects__Header" data-aos="fade-right">
        <img
          className="Projects__ProjectIcon"
          src={ProjectIcon}
          alt="project-icon"
        />
        <h3 className="Projects__Label">
          {language === 'pl' ? 'Projekty' : 'Projects'}
        </h3>
        <div className="Projects__Numbers">
          {projects.map((project) => (
            <span
              className={
                project.number === currentProject.number
                  ? 'Projects__Number Projects__Number_Active'
                  : 'Projects__Number'
              }
              key={project.number}
              onClick={() => {
                setCurrentProject(project);
              }}
            >
              {project.number}
            </span>
          ))}
        </div>
      </div>
      <Project project={currentProject} language={language} />
    </section>
  );
};

export default Projects;
