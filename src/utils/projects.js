import {
  html,
  css,
  javascript,
  react,
  redux,
  nodejs,
  express,
  mongodb,
  firebase,
  socketio,
  rwd,
} from '../assets/img/skills';

import {
  solar1,
  solar2,
  chat1,
  chat2,
  teamManager1,
  teamManager2,
  teamManager3,
  insta1,
  insta2,
  psd1,
  psd2,
} from '../assets/img/projects-screens/index';

export const solarSystem = {
  title: {
    PL: 'Układ Słoneczny',
    ENG: 'Solar System',
  },
  description: {
    PL: 'Model układu słonecznego we właściwej skali',
    ENG: 'Model of our solar system in a proper scale',
  },
  screens: [solar1, solar2],
  technologies: [html, css, javascript],
  live: 'https://solar-system-model.netlify.app',
  github: 'https://github.com/JakubKonefal/Solar-system',
};

export const chatApp = {
  title: {
    PL: 'Chat - App',
    ENG: 'Chat - App',
  },
  description: {
    PL: 'Czat z ogólnym pokojem i prywatnymi wiadomościami',
    ENG: 'Chat with one room and private messages',
  },
  screens: [chat1, chat2],
  technologies: [html, css, javascript, react, nodejs, express, socketio, rwd],
  live: '',
  github: 'https://github.com/JakubKonefal/Chat-App',
};

export const teamManager = {
  title: {
    PL: 'LocalCoach',
    ENG: 'LocalCoach',
  },
  description: {
    PL:
      'Menedżer drużyny piłkarskiej pozwalający tworzyć zawodników, treningi i zadania',
    ENG:
      'Football team manager allowing to create players, trainings and tasks',
  },
  screens: [teamManager1, teamManager2, teamManager3],
  technologies: [html, css, javascript, react, firebase],
  live: 'https://team-manager-05f66f.netlify.app',
  github: 'https://github.com/JakubKonefal/Team-Manager',
};

export const instaClone = {
  title: {
    PL: 'Instagram - klon',
    ENG: 'Instagram clone',
  },
  description: {
    PL: 'Uproszczony klon Instagramu zawierający jego podstawowe funkcje',
    ENG: 'Simplified clone of Instagram with its basic functionalities',
  },
  screens: [insta1, insta2],
  technologies: [
    html,
    css,
    javascript,
    react,
    redux,
    rwd,
    nodejs,
    express,
    mongodb,
  ],
  live: '',
  github: '',
};

export const psdToHtml = {
  title: {
    PL: 'Szablony WWW',
    ENG: 'WWW Templates',
  },
  description: {
    PL: 'Szablony WWW stworzone na podstawie plików PSD',
    ENG: 'WWW templates created from PSD files',
  },
  screens: [psd1, psd2],
  technologies: [html, css, javascript, rwd],
  live: '',
  github: '',
};
