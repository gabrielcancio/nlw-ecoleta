<h1 align="center">
  <img src="./.github/logo.svg">
</h1>

<h1 align="center">
  <img src="./.github/ecoleta.png" />
</h1>

## :computer: Project
**Ecoleta** is a project developed in 1st edition of **Next Level Week** promoted by **[Rocketseat](https://github.com/Rocketseat)**. The purpose of this project is to help people to find suitable places to correct waste disposal.

---

## :rocket: Technologies
### **Back-end:**
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/index.html)
- [Knex.js](http://knexjs.org/)
- [Celebrate](https://github.com/arb/celebrate)
- [Multer](https://www.npmjs.com/package/multer)

### **Front-end:**
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)
- [Leaflet Maps](https://leafletjs.com/)
- [React Dropzone](https://github.com/react-dropzone/react-dropzone)
- [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=pt&utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_436364851126-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20Places%20%7C%20EXA%20%7C%20Google%20Maps%20Geolocation%20API-KWID_43700044401406153-aud-595609270041%3Akwd-300650646226-userloc_9074281&utm_term=KW_google%20geolocation%20api-ST_google%20geolocation%20api)

### **Mobile:**
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Expo Location](https://docs.expo.io/versions/latest/sdk/location/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Expo Stack Navigator](https://reactnavigation.org/docs/stack-navigator/)
- [Axios](https://github.com/axios/axios)

### **Other used softwares :**
- [Insomnia](https://insomnia.rest/download)
- [Figma](https://www.figma.com)
- [VScode](https://code.visualstudio.com/)

---

## 🔖 Layout
You can access the layout of project on Figma [here](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-Booster?node-id=0%3A1). (You need a Figma account )

---

## :gear: Installing
1. Make a clone of this repository with command: 
```bash
$ git clone https://github.com/gabrielcancio/nlw-ecoleta.git
```

2. On server direcotory run the command(*You need [yarn](https://yarnpkg.com/getting-started/install) or [npm](https://www.npmjs.com/get-npm) installed*): 
```bash
$ yarn
```
Or
```bash
$ npm install 
```
3. On web direcotory run the command: 
```bash
$ yarn
```
Or
```bash
$ npm install
```
4. On server direcotory run the command:
```bash
$ yarn
```
Or
```bash
$ npm install

```
5. On server directory, run the migrations with the command:
```bash
$ yarn knex:migrate
```
Or
```bash
$ npm knex:migrate

```
6. For the last, populate the database with seeds with the command: 
```bash
$ yarn knex:seed
```
Or
```bash
$ npm knex:seed

```

---

## :zap: Running
1. You can run the API (server application) on server directory and runnig the follow command:
```bash
$ yarn dev
```
Or
```bash
$ npm dev
``` 

2. For the mobile and web applications, on the specific directory(mobile or web) run the command:
```bash
$ yarn start
```
Or
```bash
$ npm start
``` 

*PS: You need to change the baseURL to IP of your computer on path mobile/src/services/api.ts inside of api constant, on baseURL key. Like this:*

```javascript
// Replace "yourIP" to IP of your PC
const api = axios.create({
    baseURL: `http://yourIP:3333`
});
```
---
Developed with :purple_heart: by Gabriel Cancio!