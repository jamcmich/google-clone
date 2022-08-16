<!-- Heading -->
<section>
    <div align='center'>
        <img src='assets/google-icon.png' alt='Google Icon' width='100' height='100' />
        <h1>Google Search Clone</h1>
        <p>A static web application that uses Google’s search engine to render results.</p>
    </div>
    <p align='center'>
        <a href='#demo'>Demo</a> •
        <a href='#features'>Features</a> •
        <a href='#technologies-used'>Technologies Used</a> •
        <a href='#screenshots'>Screenshots</a> •
        <a href='#best-practices'>Problem Solving</a> •
        <a href='#code-examples'>Code Examples</a> •
        <a href='#best-practices'>Future Improvements</a>
    </p>
</section>

<!-- Demo -->
<section>
    <h3>Demo</h3>
    <a href='https://jamcmich.github.io/google-search-clone/'>https://jamcmich.github.io/google-search-clone/</a>
</section>

<!-- Features -->
<section>
    <h3>Features</h3>
    <blockquote>
        <p>Note: This website has identical elements and styling to <a href='https://www.google.com/'>Google's search page</a> but includes only the essential search features.</p>
    </blockquote>
    <ul>
        <li>Search functionality with Google via RapidAPI</li>
        <li>Responsive styling for mobile, tablet, and desktop</li>
    </ul>
</section>

<!-- Technologies -->

## Technologies Used

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Axios](https://img.shields.io/badge/Axios-671DDF?style=for-the-badge&logo=axios&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![WindiCSS](https://img.shields.io/badge/windicss-48B0F1.svg?style=for-the-badge&logo=windi-css&logoColor=white)

<!-- Screenshots -->
<section>
    <h3>Screenshots</h3>
    <img src='assets/demo.gif' />
</section>

<!-- Problem Solving -->
<section>
    <h3>Problem Solving</h3>
    <h5>Styling Conventions</h5>
    <p>This project was my first exposure to using <a href='https://windicss.org/guide/'><b>WindiCSS</b></a> (an on-demand alternative to <a href='https://tailwindcss.com/docs/utility-first'><b>Tailwind</b></a>). Although Windi is convenient for styling elements on the fly, it suffers from the same issues as Tailwind: lack of legibility, inability to chain selectors, cluttering the DOM, etc. I realized the need for a consistent naming scheme after styling my first few React components and began researching a flexible solution.
    <br><br>
    After looking into the issue, I discovered a CSS naming convention created by BEM for writing cleaner and more readable class names. You can read up on the methodology with examples in <a href='http://getbem.com/introduction/'><b>BEM's official guide</b></a>. These practices provided me with solutions for simplifying the DOM structure, creating descriptive CSS styles, and self-documenting my code.
    <br><br>
    Reading up on the Windi documentation also provided me with insight for using BEM styling and improving the DOM's readability... (examples).</p>
</section>

<!-- Code Examples -->
<section>
    <h3>Code Examples</h3>
</section>

<!-- Improvements -->
<section>
    <h3 id="future-improvements">Future Improvements</h3>
    <ul>
        <li>
            <input disabled="" type="checkbox" />
            <a href="https://www.educba.com/pagination-in-javascript/">Pagination</a>
        </li>
        <li>
            <input disabled="" type="checkbox" />
            &quot;I&#39;m Feeling Lucky&quot; button takes the user to a random page</li>
        <li>
            <input disabled="" type="checkbox" />
            Sorting results into sections (i.e. All, Images, News, etc.)
        </li>
    </ul>
</section>
