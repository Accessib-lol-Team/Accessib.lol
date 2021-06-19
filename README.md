# Accessib.lol

Accessib.lol seeks to augment the League of Legends in-game experience to provide validation to members of the LGBTQ+ community and other minority groups. Accessib.lol includes a website and desktop Overwolf companion app, enabling users to extend their client for more well-rounded gameplay.

**Demo Video:**
[https://www.youtube.com/watch?v=Xeds_n0SROU](https://www.youtube.com/watch?v=Xeds_n0SROU)

**Authors:**

[Riley Abrahamson _(he/him)_](https://www.rileyabrahamson.com/)

[Ed Swanson _(he/him)_](https://github.com/Coconut-Head)

## Inspiration

Accessib.lol was created to address lack of inclusion and accessibility features across many modern esports titles. Both the communities of these games--as well as the accessibility tools available within--aren't able to reach the needs of every potential player. [Video games are for everyone](https://www.youtube.com/watch?v=RWQcuBigOj0), and this project seeks to augment inclusion and access in one of the world's biggest titles: League of Legends.

## What it does

Accessib.lol is composed of three primary pieces:

### 💻 The Website

-   The website is the landing spot for new users of Accessib.lol. Here users can learn about the application, create an account, and download the desktop app.

### 🛠 The Server

-   The server hosts our API (Application Programming Interface). This communicates between the website, our database, and the desktop app. It protects user information by making sure only verified connections can be made between the project.

### 🎮 The Desktop App

-   The desktop app is what extends League of Legends to add new accessibility features. The desktop App hooks into the _Overwolf_ platform to read events in-game and allow the custom software to respond.

## How we built it

### 💻 The Website

-   The website is a `React` project leaning pretty light on extra packages. It makes use of modern ES6 JavaScript syntax, a few custom hooks, and a focus on easy navigation with `react-router`. For styling, we decided to go with vanilla `CSS3` to make it easier to translate styles between the website and the desktop Overwolf app. The styling is also scaffolded with the _best_ drag-and-drop CSS package: [water.css](https://watercss.kognise.dev/). For hosting, the site is hosted on a `Netlify` instance with a custom domain from `Namecheap`.

### 🛠 The Server

-   The API server is built with `NodeJS` using `Express`. The API connects with a `MongoDB` data source for `NoSQL`-based data management--which works quite well with our stack. The server utilizes a `controller-model-route` architecture making it easy to extend and maintain as a project. The API server is hosted on a `Heroku` dyno.

### 🎮 The Desktop App

-   The desktop app is built using `Overwolf`'s platform. As a custom app ontop of `Overwolf`, the tech stack consists of `HTML`, `CSS`, and `TypeScript`--just like a website! There are two halves of the app. One half is the out-of-game desktop app which gives directions on how to sign up and use the application and the other half is the in-game app.

## 👟 How to Run

### 💻 The Website

-   The website can be run locally by using `npm`--if you do not have `npm` installed, you will need that first! Then, open a development terminal in the `frontend` folder. Run `npm install` to get all the packages and then `npm start` The React project will be run on a local development server in the web browser at `http://localhost:3000`. To close the live preview, simply press `CTRL + C` in the terminal the project was started it.

### 🛠 The Server

-   Just like the website, the back end also uses `npm`! First, create a `.env` file in the `backend` folder. Inside the file you will provide a database URI and a port number.

```
MONGO_URI="(Your database connection string)"
PORT=1127
```

-   Run `npm install` to get all the packages and then `npm start` The API will be live at `http://localhost:1127`. This can then be connected tool with an API tool like `Postman` or `Hoppscotch`. To close the live preview, simply press `CTRL + C` in the terminal the project was started it.

### 🎮 The Desktop App

-   To run Accessib.lol on your pc you will need to download both the _overwolf-dist_ folder and the Overwolf App [https://www.overwolf.com/](https://www.overwolf.com/).
-   When you have Overwolf installed click through Settings -> About -> Development options.
-   In the new packages window select "Load unpacked extensions..." and find the dist folder you downloaded before.
-   Finally click "launch" and the app should open!
-   If you create and account on Accessib.lol and launch a game of League of Legends, you will be able to see your pronouns and anyone else that has used Accessib.lol in the past!

## Challenges we ran into

### Riley

-   _My experience has leaned more towards front-end than back-end programming. Setting up a robust and proficient API server was a large undertaking, but with encouragement from Ed we were able to muscle through it. Additionally, I spent a great sum of our initial worktime researching into possible serverless backend set-ups like AWS Lambda functions. We ended up moving away from this approach to get more hands-on practice with back-end, but it was an early sunk cost._

### Ed

-   _Before this hackathon I had done very little in the terms of front end or web development. I had to learn a lot about JavaScript, HTML, and CSS to create the desktop app. Never before had I made a desktop app either. It took me more time then I would've liked to complete simple tasks such as making the API calls to the Accessib.lol servers. Luckily I had Riley to help me through a lot of these issues since he had a lot more experience then me._

## Accomplishments that we're proud of

### Riley

-   _I'm incredibly happy to have produced a fully-functional and robust app within this Hackathon. In the competitions I've participated in before, I always walk away feeling like a chunk was missing or had to be mocked-up. For Accessib.lol, I'm wholly satisfied with my individual and team contributions to a well-made project_

    _Additionally, it means a ton to me to have a demonstrable project connected to inclusivity, accessibilty and A11y. Making tech and gaming more welcoming is a huge long-term career goal of mine and Accessib.lol + PrideMakers has helped me have an early piece of the puzzle._

### Ed

-   _I am extremely proud of how well the Overwolf app ended up working! When we first started I was frightened that I would have too much trouble getting the app working, let alone look decent. It was satisfying to be able to see my work come together rather quickly!_

## What we learned

### Riley

-   _I learned that Ed is a pretty awesome teammate!_ 😄 _In all earnesty, I was able to use this project to better round-out my software development soft skills. I acted as both the team's project manager, setting up all our project management tools on GitHub and handling deploys. I'm happy to have had a role to help mentor Ed in programming languages/frameworks he has never used before--he did a great job!_

### Ed

-   _I learned that Riley has the patience of a saint. I am sure I was not the easiest student every day. I learned so much about how modern software is developed. Outside of the few Computer Science classes that I have had I haven't programmed any "complete" apps like this. I also had close to zero knowledge about Javascript, CSS, and HTML before this hackathon._

## What's next for Accessib.lol

### 🏳‍🌈 Sexuality Representation

-   In addition to pronoun representation, Accessib.lol would like to extend to include different sexuality flags in addition to player pronouns. These will take the form of custom pride flag emojis that will sit alongside the in-game display for users who have registered. This would be a great way to extend the pride of Pride Month beyond when many companies run their own in-game events.

### 🦻 Deaf/Hard of Hearing Prompts

-   Some champions in League of Legends (such as Sion, Kled, and Corki) have massively impactful abilities that are announced via a global sound effect. While nice and thematic, they do leave dear/hard of hearing players at a clear disadvantage, as they have no way of knowing when these abilities are actived/prepped. Overwolf seeks to implement an action-log for abilities that have _only_ auditory tells. This way, every player can respond fairly to these key skills.

### 👁‍🗨 Colorblindness Customization

-   Colorblindness in videogames is a difficult thing to get right. Colorblindness can come in various forms and intensities, with different players having different needs. Some titles approach this
