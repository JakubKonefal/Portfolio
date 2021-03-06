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
  rest,
  sass,
  figma,
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
  worldCountries1,
  worldCountries2,
  worldCountries3,
  bartster1,
  bartster2,
  accountingOffice1,
  accountingOffice2,
} from '../assets/img/projects-screens/index';

export const teamManager = {
  title: {
    PL: 'LocalCoach',
    ENG: 'LocalCoach',
  },
  description: {
    PL:
      'Wirtualny menedżer piłkarski pozwalający na stworzenie konta i zarządzanie swoimi drużynami. Przechowuje informacje dotyczące każdego z zawodników oraz zaplanowanych treningów w obrębie drużyny. Tworzenie całych serii treningów sprawia, że planowanie jest szybkie, a szczegółowy opis każdego treningu umożliwia bardziej precyzyjne kształtowanie stylu prowadzonej drużyny.',
    ENG:
      'Virtual football manager that allows you to create an account and manage your teams. It stores information about each player and planned training sessions within the team. Creating a whole series of training sessions makes planning quick, and a detailed description of each training session allows you to shape the style of your team more precisely.',
  },
  screens: [teamManager1, teamManager2, teamManager3],
  technologies: [html, css, javascript, react, firebase],
  live: ['https://localcoach.netlify.app/'],
  github: 'https://github.com/JakubKonefal/Team-Manager',
  number: 1,
};

export const worldCountries = {
  title: {
    PL: 'World Countries',
    ENG: 'World Countries',
  },
  description: {
    PL:
      'Serwis wykorzystujący publiczne API, prezentujący podstawowe dane na temat wszystkich krajów świata w formie wykresów. Umożliwia także wyszukiwanie dowolnego kraju i przeglądanie informacji na jego temat.',
    ENG:
      'Website using the public API, presenting basic data on all countries of the world in the form of charts. It also allows you to search for every single country and view information about it.',
  },
  screens: [worldCountries1, worldCountries2, worldCountries3],
  technologies: [html, css, javascript, sass, rwd, rest],
  live: ['https://world-countries37.netlify.app/'],
  github: 'https://github.com/JakubKonefal/World-Countries',
  number: 2,
};

export const accountingOffice = {
  title: {
    PL: 'Strona internetowa - Biuro rachunkowe',
    ENG: 'Accounting office website',
  },
  description: {
    PL:
      'Strona - wizytówka dla firmy, przedstawiająca jej działalność i umożliwiająca kontakt mailowy. Realizacja wszystkich etapów powstawania strony, włącznie z tworzeniem layoutu i umieszczeniem strony na płatnym hostingu.',
    ENG: `Website for a company that presents it's activity and allows to contact the company via email. Took charge of all stages of delivering a product, from gathering requirements, through designing an interface, implementing code and deploying.`,
  },
  screens: [accountingOffice1, accountingOffice2],
  technologies: [html, css, javascript, rwd, figma],
  figma,
  live: ['https://mc-biuro.pl/'],
  github: '',
  number: 3,
};

export const bartster = {
  title: {
    PL: 'Strona internetowa - Akcesoria do samochodów',
    ENG: 'Vehicle accesories website',
  },
  description: {
    PL:
      'Strona - wizytówka dla firmy, przedstawiająca jej działalność i umożliwiająca kontakt mailowy. Realizacja wszystkich etapów powstawania strony, włącznie z tworzeniem layoutu i umieszczeniem strony na płatnym hostingu.',
    ENG: `Website for a company that presents it's activity and allows to contact the company via email. Took charge of all stages of delivering a product, from gathering requirements, through designing an interface, implementing code and deploying.`,
  },
  screens: [bartster1, bartster2],
  technologies: [html, css, javascript, rwd, figma],
  live: ['https://bartster4x4.pl/'],
  github: '',
  number: 4,
};

export const solarSystem = {
  title: {
    PL: 'Układ Słoneczny',
    ENG: 'Solar System',
  },
  description: {
    PL:
      'Interaktywno - edukacyjny model Układu Słonecznego we właściwej skali. Obrazuje rzeczywiste odległości i wielkości obiektów za pomocą symulacji prędkości światła, nawigacji pomiędzy obiektami czy zamianie jednostek, w których mierzona jest odległość.',
    ENG:
      'Interactive - educational model of our Solar System in a proper scale. Illustrates real distances and sizes of objects by simulating speed of light, navigating between objects, or changing units of distance.',
  },
  screens: [solar1, solar2],
  technologies: [html, css, javascript],
  live: ['https://solar-system-model.netlify.app'],
  github: 'https://github.com/JakubKonefal/Solar-system',
  number: 5,
};

export const chatApp = {
  title: {
    PL: 'Chat - App',
    ENG: 'Chat - App',
  },
  description: {
    PL:
      'Aplikacja umożliwiająca komunikację w czasie rzeczywistym z innymi użytkownikami za pomocą protokołu WebSocket. Pozwala na wysyłanie tekstu, obrazów i emotikonów zarówno na czacie "ogólnym" jak i w wiadomości prywatnej. ',
    ENG:
      'An application that enables real-time communication with other users via the WebSocket protocol. It allows you to send text, pictures and emoticons both in "general" chat and in private message.',
  },
  screens: [chat1, chat2],
  technologies: [html, css, javascript, react, nodejs, express, socketio, rwd],
  live: ['https://chat-app3737.netlify.app/'],
  github: 'https://github.com/JakubKonefal/Chat-App',
  number: 6,
};

export const instaClone = {
  title: {
    PL: 'Instagram - klon',
    ENG: 'Instagram clone',
  },
  description: {
    PL:
      'Uproszczony klon Instagramu zawierający jego podstawowe funkcje, takie jak: tworzenie profilu wraz ze zdjęciem, dodawanie postów, przeglądanie tablicy, obserwowanie profili innych użytkowników, "lajkowanie" postów czy komentowanie.',
    ENG:
      "Simplified clone of Instagram containing its basic functionalities, such as: creating profile with a photo, adding posts, viewing the board, following other users's profiles, liking posts or commenting.",
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
  live: ['https://insta-clone37.netlify.app/'],
  github: 'https://github.com/JakubKonefal/insta-clone',
  number: 7,
};

export const projects = [
  teamManager,
  worldCountries,
  accountingOffice,
  bartster,
  solarSystem,
  chatApp,
  instaClone,
];
