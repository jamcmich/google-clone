<!-- Heading -->
<section>
    <div align='center'>
        <img src='assets/readme/project-icon.png' alt='Google Icon' width='100' height='100' />
        <h1>Google Search Clone</h1>
        <p>A static web application that uses Google’s search engine to render results.</p>
    </div>
    <p align='center'>
        <a href='#demo'>Demo</a> •
        <a href='#features'>Features</a> •
        <a href='#technologies-used'>Technologies Used</a> •
        <a href='#screenshots'>Screenshots</a> •
        <a href='#problem-solving'>Problem Solving</a> •
        <a href='#code-examples'>Code Examples</a> •
        <a href='#future-improvements'>Future Improvements</a>
    </p>
</section>

<!-- Demo -->

### 🔍 Demo

[https://jamcmich.github.io/google-search-clone/](https://jamcmich.github.io/google-search-clone/)

<!-- Features -->

### ✨ Features

> Note: This website has identical elements and styling to **[Google's search page](https://www.google.com/)** but includes only the essential search features.

-   Search functionality with Google via **[RapidAPI](https://rapidapi.com/apigeek/api/google-search3/)**
-   Responsive styling for mobile, tablet, and desktop
-   Light and Dark mode theme switcher
-   Custom tooltip system

<!-- Technologies -->

### 🧰 Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![WindiCSS](https://img.shields.io/badge/windicss-48B0F1.svg?style=for-the-badge&logo=windi-css&logoColor=white)

<!-- Screenshots -->

### 👀 Screenshots

![](assets/readme/project-demo.gif)

<!-- Problem Solving -->

### 🚧 Problem Solving

#### Styling Conventions

This project was my first exposure to using **[WindiCSS](https://windicss.org/guide/)** (an on-demand alternative to **[Tailwind](https://tailwindcss.com/docs/utility-first)**). Although Windi is convenient for styling elements on the fly, it suffers from the same issues as Tailwind: lack of legibility, inability to chain selectors, cluttering the DOM, etc. I realized the need for a consistent naming scheme after styling my first few React components and began researching a flexible solution.

After looking into the issue, I discovered a CSS naming convention created by BEM for writing cleaner and more readable class names. You can read up on the methodology with examples in **[BEM's official guide](http://getbem.com/introduction/)**. These practices provided me with solutions for simplifying the DOM structure, creating descriptive CSS styles, and self-documenting my code.

Reading up on the Windi documentation allowed me to **[incorporate Windi's utility classes in an external stylesheet](#windicss-external-stylesheet)** and preserve my application's class naming schemes. Even though this method would invalidate one of the framework's biggest advantages, I was able to reduce the clutter of my JSX files and create a solution with BEM conventions in mind.

#### Tooltips

Since React is a very flexible library, many developers turn to third-party solutions when it comes to certain features. For example, some components on Google's search page provide users with tooltips on hover and I needed a way to incorporate this functionality into my project.

**[React Tooltip](https://github.com/wwayne/react-tooltip)** is a library with almost 3k stars on GitHub. Many developers rely on external solutions such as this one assuming the library will be well maintained and up-to-date. Unfortunately, myself and many others were running into **[compatibility issues between React Tooltip and React 18](https://github.com/wwayne/react-tooltip/issues/777)**. The repository had been struggling to find a maintainer and likely wouldn't be updated for the new version of React anytime soon.

I decided to create **[a simple, reusable tooltip system](#custom-tooltips)** that complimented my project instead of relying on the inconsistencies of an external library. This solution was lightweight and allowed me to wrap icons within my ``<Tooltip />`` component and create custom tooltip styles.

<!-- Code Examples -->

### 📸 Code Examples

#### WindiCSS + External Stylesheet

![](assets/readme/styles__example__home-header.png)

#### Theme Switcher

![](assets/readme/contexts__app.png)
![](assets/readme/components__theme-icons.png)

#### Custom Tooltips

![](assets/readme/components__tooltip.png)

#### Reducer

![](assets/readme/contexts__reducer.png)

#### React Context

![](assets/readme/contexts__state-context.png)

#### Path Shorthand

![](assets/readme/configs__path-shorthand.png)

<!-- Improvements -->

### 🧪 Future Improvements

-   **[Pagination](https://www.educba.com/pagination-in-javascript/)**
-   "I'm Feeling Lucky" button takes the user to a random page
-   Sorting results into sections (i.e. All, Images, News, etc.)
