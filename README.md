# Luxestate Template

This is the source code to [Luxestate Template From Graphberry](https://www.graphberry.com/item/luxestate--real-estate-landing-page). Making projects and templates help you improve your coding skills by building realistic projects.

**Note:** PSD file is available at `design` directory, or you can use a [direct download link](https://github.com/PhilopaterHany/Luxestate-Template/raw/main/design/Luxestate-Template.psd).

## Table of contents

-   [Overview](#overview)
    -   [How To Run The Code](#running-code)
    -   [Screenshots](#screenshots)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [Style](#styles)
    -   [What I learned](#what-i-learned)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### Running Code

To run the code and see the final HTML page, you must follow these steps:

-   Install all required dependencies using npm, write `npm install` in root directory with terminal.

-   In the root directory type `gulp` in terminal to start the local server at port 9000.

-   Open Your Browser and type `localhost:9000` in the search bar, and that's it. enjoy!

### Screenshots

![Desktop Screenshot](./design/desktop.jpg)

### Links

-   Design URL: [Graphberry](https://www.graphberry.com/item/luxestate--real-estate-landing-page)
-   Source Code URL: [Github](https://github.com/PhilopaterHany/Luxestate-Template/)
-   Live Site URL: [Github Pages](https://philopaterhany.github.io/Luxestate-Template/)

## My process

### Built with

-   Semantic HTML5 Markup
-   Custom CSS3 Properties
-   CSS3 Flexbox & Grid
-   Vanilla Javascript + ES6
-   JSON
-   AJAX
-   SCSS
-   Pug.js
-   Gulp.js @4.0.2
-   Font Awesome Library @6.2.0
-   Normalize.css Library @8.0.1
-   Animate.css Library
-   WOW.js Library

### Styles

#### Colors

-   Tangerine Yellow: #ffcc03
-   Nordic: #1f383d
-   Gray: #f2f2f2
-   Dark Gray: #666666
-   Foghorn: #919eb1
-   White: #ffffff

#### Fonts

-   Family: [Montserrat](https://fonts.google.com/specimen/Montserrat)
-   Weights: 400, 500, 700

-   Family: [Qwitcher Grypen](https://fonts.google.com/specimen/Qwitcher+Grypen)
-   Weight: 400

### What I learned

```scss
&:last-child {
    @media (min-width: 992px) {
        grid-column-end: -1;
    }
}
```

```js
// Counters Start When Visible On Screen
const counters = document.querySelectorAll(".about .boxes-holder .box span");
const speed = 300;
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector(".about").offsetTop - 250) {
        counters.forEach((counter) => {
            const updateCount = () => {
                const target = parseInt(+counter.dataset.count);
                const count = parseInt(+counter.innerText);
                const increment = Math.trunc(target / speed);
                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 10);
                } else {
                    count.innerText = target;
                }
            };
            updateCount();
        });
    }
});

// Formating Currency And Removing Decimals
function formatCurrency(value) {
    return value
        .toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
        .slice(0, -3);
}

// Agents Names
agentName.innerHTML = `${agent.gender === "male" ? "Mr" : "Mrs"}. ${agent.name}`;
```

Apartment JSON Model:

```json
[
    {
        "img": "images/apartment-4.webp",
        "address": "308 Negra Arroyo Lane, Albuquerque",
        "price": "4861",
        "bed": "3",
        "kitchen": "2",
        "shower": "1"
    }
]
```

Agent JSON Model:

```json
[
    {
        "photo": "images/agent-4.webp",
        "job": "Frontend Developer",
        "name": "Sarah Jones",
        "gender": "female",
        "twitUser": "PhilopaterHany4",
        "githubUser": "PhilopaterHany",
        "linkedinUser": "philopater-hany"
    }
]
```

### Useful Resources

-   [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
-   [Pug.js Documentation](https://pugjs.org/api/getting-started.html)
-   [Sass Documentation](https://sass-lang.com/documentation/)
-   [Gulp.js Documentation](https://gulpjs.com/docs/en/getting-started/quick-start/)
-   [npm Documenation](https://docs.npmjs.com/)
-   [Font Awesome Documentation](https://fontawesome.com/docs)
-   [Animate.css Documentation](https://animate.style/)
-   [WOW.js Documentation](https://wowjs.uk/docs.html)

## Author

-   Website - Portfolio Is Coming Out Soon!
-   Twitter - [@PhilopaterHany4](https://www.twitter.com/PhilopaterHany4/)
-   Facebook - [Philopater Hany](https://www.facebook.com/philopater.hany.3)
-   Discord - [#8178](https://discord.com/#8178/)
