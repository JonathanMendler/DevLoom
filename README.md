# DevLoom
Welcome to DevLoom, a blogging platform built upon Ruby on Rails, PostgreSQL, Node.js, React.js, Vite, and TailwindCSS! Deployment through Heroku and Netlify. This README will guide you through the setup process.

## Versions
- **Node:** v20.5.1
* **React:** v18.2.0
+ **Vite:** v5.1.6
- **Tailwind:** v3.4.1

## Project Status
This project is currently in development. Users can create and read blog posts. Signup and Login are in progress. User ability to Update and Delete posts to be implemented upon authentication. 

## Project Screen Shot
<img width="30px" src="https://imgur.com/a/gdgQHwa" alt="DevLoom jpeg" />

## Installation and Setup
1. **Clone the repository**
You will need `node` and `npm` installed globally on your machine.
   ```
   git clone [https://github.com/JonathanMendler/DevLoom_BE.git](https://github.com/JonathanMendler/DevLoom)
   cd DevLoom
   ```
3. **Install**
   ```
   bundle install
   ```
4. **Start Server**
   ```
   npm start
   ```
5. **To Visit App**
   ```
   localhost:5173
   ```

Devloom should now be running at 'http://localhost:5173'.

## Reflection

This was a 4 week long hackathon project hosted by [Don the Developer](https://www.youtube.com/@DonTheDeveloper). Project goals included using technologies learned up until this point, familiarizing myself with documentation for new features, and learning deployment.

Originally I wanted to build an application that would serve me as a work journal, to act as a testament to my growth as a developer. That intention spiraled into a desire to create it not just for myself, but for other early career devs as well. This would require the build to allow for user account creation, the ability to make your posts public or private, and a potential for commentary. This latter half is still in development.

One of the main challenges I ran into was front end design utilizing Tailwind. I have familiarity with my builds using compartmentalized CSS files, but utilizing attributes in the JSX files via classNames proved considerably more difficult than I had anticipated. Due to project time constraints, I had to table much of my UI/UX design as I still had to teach myself deployment in order to have a functional product prepared for the deadline

At the end of the day, the technologies implemented in this project are Ruby on Rails, PostgreSQL, and Heroku for deployment on the backend, while the frontend utilizes React, Vite, and TailwindCSS with Netlify for deployment. This project has been an absolute delight to work on and I'm genuinely looking forward to completing it.

## Acknowledgments
- Special thanks to the React and Tailwind communities for their indispensable insight and support

## Contact
jon.mendler@gmail.com
