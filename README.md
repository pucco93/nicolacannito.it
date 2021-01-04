# nicolacannito.it
## Introduction
This is a simple react app created to show a mockup site.
The project is meant to be linked with a subdomain blog made in **Wordpress**, so the React part is only a static site that works with three sections/pages:
- Home,
- About,
- Works (portfolio).

This project is started some months ago when I learnt React.js for work, from that moment I've tried to recreate a famous photographer and filmaker site using React.

## Iterations

The project has passed throught various stages (more of them restarting the project from scratch), while I was learning at work some new technologies the project was receiving these new techs, giving it a try to learn more.

### Create React App
- The first stage was to only try ```npm create-react-app nicolacannito.it```.

### TypeScript - SCSS Modules
- Next came the integration with **Typescript**, and **SCSS modules**, since I was really appreciating these techs when working.

### Git
- The third iteration was more a phase that would lead me to opening a repo for this solution, that time I've chosen **Bitbucket** since this project was meant to be _private and secure_ to deploy in his site. Then it came the decision to put the repo on **Github** in a _public_ repo.

### Hooks
- The 4th, and last until now, iteration was to replace all the React classes with Hooks, this was difficult since in this stage Hooks were tought only by myself, and if the project was going in a good way, Hooks would be used during everyday job switching from classes.
Some animations have been implemented during this iteration, using **[React-spring](https://github.com/react-spring/react-spring)**, with some difficulties using typescript.
UPDATE: after some time not updating this project but using hooks during everyday work I've felt more secure using them, so I've found a way to let react spring work correctly, implementing some transitions using useTransition.

### Material UI - useStyles (React-JSS)
- This step was about transitioning from SCSS modules to React-JSS, which I've found more usefull due to the use of the props to change the CSS without flood the tsx file with conditions and others.

### React-Router
- Since the start of the project I was thinking of giving **[React-Router](https://reactrouter.com/web)** a try, so in this iteration I've tried implementing this package.
The documentation was good but some Medium article can explain even better every component of this library.

### Dark theme
- Iteration centered on building a dark mode and a default mode, it is built using a boolean hook and two files, for each theme. The icon is a two state svg created using React-Spring.

### Localization
- Localization is important in the web so to achieve this objective I've used **[i18n](https://www.npmjs.com/package/i18n)** package.

## Home Section 
This page is the home and the main page that user will see accessing the site. It is almost completed, the remaining part is about the background transitions which will be about 4 images that will loop with a fade in/fade out transition between them.

## About Section
This part is to start.

## Works Section
Works section was a section that I was thinking of using as a portfolio for Nicola's project, but in the old WordPress site he hadn't any relevant project, instead it was using this page as a link to Youtube, so this page has been changed into Blog Section, explained below.

## Blog Section
Blog section is a page which shows Nicola's posts, either projects or some textual posts.
Since the site won't have any real call to WordPress APIs I've tried simulating calls with settimeout and a json file included inside the solution, these are mock items.