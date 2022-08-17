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
-   Data fetching and theme switcher via **[Higher Order Components](https://reactjs.org/docs/higher-order-components.html)**
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

Reading up on the Windi documentation allowed me to **[incorporate Windi's utility classes in an external stylesheet](#styling-conventions-1)** and preserve my application's class naming schemes. Even though this method would invalidate one of the framework's biggest advantages, I was able to reduce the clutter of my JSX files and create a solution with BEM conventions in mind.

#### Custom Tooltips

Since React is a very flexible library, many developers turn to third-party solutions when it comes to certain features. For example, some components on Google's search page provide users with tooltips on hover and I needed a way to incorporate this functionality into my project.

**[React Tooltip](https://github.com/wwayne/react-tooltip)** is a library with almost 3k stars on GitHub. Many developers rely on external solutions such as this one assuming the library will be well maintained and up-to-date. Unfortunately, myself and many others were running into **[compatibility issues between React Tooltip and React 18](https://github.com/wwayne/react-tooltip/issues/777)**. The repository had been struggling to find a maintainer and likely wouldn't be updated for the new version of React anytime soon.

I decided to create **[a simple, reusable tooltip system](#custom-tooltips-1)** that complimented my project instead of relying on the inconsistencies of an external library. This solution was lightweight and allowed me to wrap icons within my `<Tooltip />` component and create custom tooltip styles.

#### Data Fetching

Fetching data in React is fairly straightforward using Async/Await and Axios (see **[Data Fetching code snippet](#data-fetching-1)**). The real challenge is distributing the returned data across a React project between parent and child components. To overcome this obstacle we can use **[React Context](#react-context)**.

#### React Context

The React Context API was introduced in React v16.3, allowing developers to pass data through component trees and share information at various levels in an application. Instead of passing props down through every single component on the tree, the components that require a prop can simply request it from `useContext()`. This feature circumvents the dreaded practice of **[prop drilling](https://blog.logrocket.com/react-context-api-deep-dive-examples/#reactpropdrilling)** and reduces unnecessary re-rendering.

To use Context within our application we first establish a State Provider, essentially a higher order component that passes values to it's `{children}`, to use state within our application. Feel free to **[view my implementation of StateContext here](#react-context-1)** for a better understanding. You might notice that my code includes an additional implementation `useReducer()` which is an alternative to `useState()` and is used when the next state depends on the previous one. This allows us to implement features such as passing data or **[toggling themes](#theme-switcher)**.

#### Reducer

`useReducer()` works exactly like JavaScript's Array `reduce()` function by receiving an initial value of `state` and an `action`, and then returning a new state. I created two ``actionTypes`` within my application, ``SET_SEARCH_INPUT`` and ``SET_APPLICATION_THEME``, to pass input and theme values to various components (see **[Reducer](#reducer-1)** code snippet).

#### Data Rendering

#### Parsing Search Input

Search engines are built with varying degrees of complexity to allow for detailed queries. Most users take advantage of basic keyword searching so I decided to implement **[a regex pattern that combines words and filters special characters](#parsing-search-input-1)**.

For example, searching `cat memes` or `cat!@#$%-_memes` is parsed to `cat+memes` which is the appropriate format for Google's search engine parameters. The resulting URL becomes `https://google-search3.p.rapidapi.com/api/v1/search/q=cat+memes&num=10`.

<!-- Code Examples -->

### 📸 Code Examples

#### Styling Conventions

![](assets/readme/components__search-form.png)
![](assets/readme/styles__example__search-page.png)

#### Custom Tooltips

![](assets/readme/components__tooltip.png)
![](assets/readme/components__example__tooltip.png)

#### Data Fetching

![](assets/readme/utils__fetch-data.png)

#### React Context

![](assets/readme/contexts__state-context.png)
![State Provider](assets/readme/contexts__app.png)

#### Reducer

![](assets/readme/contexts__reducer.png)

#### Data Rendering

![](assets/readme/pages_example__rendering-data.png)

#### Theme Switcher

![](assets/readme/components__theme-icons.png)

#### Parsing Search Input

![](assets/readme/utils__parse-input.png)

#### Path Shorthand

![](assets/readme/configs__path-shorthand.png)

<!-- Improvements -->

### 🧪 Future Improvements

-   **[Pagination](https://www.educba.com/pagination-in-javascript/)**
-   "I'm Feeling Lucky" button takes the user to a random page
-   Sorting results into sections (i.e. All, Images, News, etc.)
