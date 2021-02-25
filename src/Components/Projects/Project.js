import React, { useState, useEffect } from 'react';
import './Project.scss';
import { GitHub, LiveTvOutlined } from '@material-ui/icons';

const Project = ({
  project: { title, description, screens, technologies, live, github },
  language,
}) => {
  useEffect(() => {
    setCurrentScreen(screens[0]);
    setCurrentLink(live[0]);
  }, [screens, live]);

  const toggleCurrentScreen = ({ target }) => {
    const { src, tabIndex } = target;
    setCurrentScreen(src);
    if (live[tabIndex]) {
      setCurrentLink(live[tabIndex]);
    }
  };

  const [currentScreen, setCurrentScreen] = useState(screens[0]);
  const [currentLink, setCurrentLink] = useState(live[0]);

  return (
    <div className="Project">
      <h3 className="Project__Title">
        {language === 'pl' ? title.PL : title.ENG}
      </h3>
      <p className="Project__Description">
        {language === 'pl' ? description.PL : description.ENG}
      </p>
      <div className="Project__Overview">
        <div className="Project__Screens">
          <div className="Project__ScreensThumbnails">
            {screens.map((screen, index) => (
              <img
                className="Project__ScreenThumbnail"
                key={screen}
                src={screen}
                tabIndex={index}
                alt={title}
                onClick={toggleCurrentScreen}
              />
            ))}
          </div>
          <div className="Project__CurrentScreenWraper">
            <img
              className="Project__CurrentScreen"
              src={currentScreen}
              alt="screen"
            />
            <div className="Project__CurrentScreenOverlay">
              <a className="Project__Link" href={currentLink}>
                <LiveTvOutlined /> Live
              </a>
              {github ? (
                <a className="Project__Link" href={github}>
                  <GitHub /> Github
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="Project__Technologies">
          {technologies.map((tech) => (
            <img
              className="Project__Technology"
              key={tech}
              src={tech}
              alt="web-techonology"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
