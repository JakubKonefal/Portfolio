import React, { useState } from 'react';
import './Projects.scss';
import Project from './Project';
import {
  solarSystem,
  chatApp,
  teamManager,
  instaClone,
  psdToHtml,
} from '../../utils/projects';
import ProjectIcon from '../../assets/img/project-icon.png';

const Projects = ({ language }) => {
  const [currentProject, setCurrentProject] = useState(solarSystem);

  return (
    <section className="Projects">
      <div className="Projects__ScrollAnchor" />
      <div className="Projects__Divider" />
      <div className="Projects__Header">
        <img
          className="Projects__ProjectIcon"
          src={ProjectIcon}
          alt="project-icon"
        />
        <h3 className="Projects__Label">
          {language === 'pl' ? 'Projekty' : 'Projects'}
        </h3>
        <div className="Projects__Numbers">
          <span
            className="Projects__Number"
            onClick={() => {
              setCurrentProject(solarSystem);
            }}
          >
            1
          </span>
          <span
            className="Projects__Number"
            onClick={() => {
              setCurrentProject(chatApp);
            }}
          >
            2
          </span>
          <span
            className="Projects__Number"
            onClick={() => {
              setCurrentProject(teamManager);
            }}
          >
            3
          </span>
          <span
            className="Projects__Number"
            onClick={() => {
              setCurrentProject(instaClone);
            }}
          >
            4
          </span>
          <span
            className="Projects__Number"
            onClick={() => {
              setCurrentProject(psdToHtml);
            }}
          >
            5
          </span>
        </div>
      </div>
      <Project project={currentProject} language={language} />
    </section>
  );
};

export default Projects;
