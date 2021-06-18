# Accessib.lol
Accessib.lol seeks to augment the League of Legends in-game experience to provide validation to members of the LGBTQ+ community and other minority groups. Accessib.lol includes a website and desktop Overwolf companion app, enabling users to extend their client for more well-rounded gameplay.

**Authors:**

[Riley *(he/him)*](https://www.rileyabrahamson.com/)

[Ed *(he/him)*](https://github.com/Coconut-Head)

## Inspiration
Accessib.lol was created to address lack of inclusion and accessibility features across many modern esports titles. Both the communities of these games--as well as the accessibility tools available within--aren't able to reach the needs of every potential player. [Video games are for everyone](https://www.youtube.com/watch?v=RWQcuBigOj0), and this project seeks to augment inclusion and access in one of the world's biggest titles: League of Legends. 

## What it does
Accessib.lol is composed of three primary pieces:

### 💻 The Website

### 🛠 The Server

### 🎮 The Desktop App
-

## How we built it

### 💻 The Website
- The website is a `React` project leaning pretty light on extra packages. It makes use of modern ES6 JavaScript syntax, a few custom hooks, and a focus on easy navigation with `react-router`. For styling, we decided to go with vanilla `CSS3` to make it easier to translate styles between the website and the desktop Overwolf app. The styling is also scaffolded with the *best* drag-and-drop CSS package: [water.css](https://watercss.kognise.dev/). For hosting, the site is hosted on a `Netlify` instance with a custom domain from `Namecheap`.   

### 🛠 The Server
- The API server is built with `NodeJS` using `Express`. The API connects with a `MongoDB` data source for `NoSQL`-based data management--which works quite well with our stack. The server utilizes a `controller-model-route` architecture making it easy to extend and maintain as a project. The API server is hosted on a `Heroku` dyno. 

### 🎮 The Desktop App
-

## Challenges we ran into
### Riley
- *My experience has leaned more towards front-end than back-end programming. Setting up a robust and proficient API server was a large undertaking, but with encouragement from Ed we were able to muscle through it. Additionally, I spent a great sum of our initial worktime researching into possible serverless backend set-ups like AWS Lambda functions. We ended up moving away from this approach to get more hands-on practice with back-end, but it was an early sunk cost.* 

### Ed
-

## Accomplishments that we're proud of
### Riley
- *I'm incredibly happy to have produced a fully-functional and robust app within this Hackathon. In the competitions I've participated in before, I always walk away feeling like a chunk was missing or had to be mocked-up. For Accessib.lol, I'm wholly satisfied with my individual and team contributions to a well-made project*

    *Additionally, it means a ton to me to have a demonstrable project connected to inclusivity, accessibilty and A11y. Making tech and gaming more welcoming is a huge long-term career goal of mine and Accessib.lol + PrideMakers has helped me have an early piece of the puzzle.*

### Ed
-

## What we learned
### Riley
- *I learned that Ed is a pretty awesome teammate!* 😄 *In all earnesty, I was able to use this project to better round-out my software development soft skills. I acted as both the team's project manager, setting up all our project management tools on GitHub and handling deploys. I'm happy to have had a role to help mentor Ed in programming languages/frameworks he has never used before--he did a great job!*

### Ed

## What's next for Accessib.lol
### 🏳‍🌈 Sexuality Representation 
- In addition to pronoun representation, Accessib.lol would like to extend to include different sexuality flags in addition to player pronouns. These will take the form of custom pride flag emojis that will sit alongside the in-game display for users who have registered. This would be a great way to extend the pride of Pride Month beyond when many companies run their own in-game events.

### 🦻 Deaf/Hard of Hearing Prompts
- Some champions in League of Legends (such as Sion, Kled, and Corki) have massively impactful abilities that are announced via a global sound effect. While nice and thematic, they do leave dear/hard of hearing players at a clear disadvantage, as they have no way of knowing when these abilities are actived/prepped. Overwolf seeks to implement an action-log for abilities that have *only* auditory tells. This way, every player can respond fairly to these key skills.

### 👁‍🗨 Colorblindness Customization
- Colorblindness in videogames is a difficult thing to get right. Colorblindness can come in various forms and intensities, with different players having different needs. Some titles approach this 