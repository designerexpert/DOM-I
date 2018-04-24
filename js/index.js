const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Extracting from siteContent into arrays
const nav = Object.entries(siteContent.nav);
const cta = Object.entries(siteContent.cta);
const newMainContent = Array.from(Object.entries(siteContent['main-content']));
// Todo figure out how to exclude the 4th item using entries.
newMainContent.splice(4, 1);
// console.log('Spliced is', newMainContent)
const contact = Object.entries(siteContent.contact);
const footer = Object.entries(siteContent.footer);

// console.log('Suff I just Made', nav, cta, mainContent, contact, footer);

// Nav Handling Here
let navElements = document.getElementsByTagName('nav');
console.log('navElementsChildren: ', navElements[0].children);
console.log('nav entries: ', nav);
let copyOfNavElements = Array.from(navElements[0].children);
copyOfNavElements.forEach((item, index) => {
  item.innerHTML = `${nav[index][1]}`
});
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Cta Handling Here
let ctaElements = document.getElementsByClassName('cta')[0].children;
let ctaH1 = ctaElements[0].getElementsByTagName('h1');
let ctaButton = ctaElements[0].getElementsByTagName('button');
let ctaImage = ctaElements[1];

ctaImage.setAttribute('src', siteContent['cta']['img-src']);

ctaButton[0].innerHTML = `${siteContent.cta.button}`;
ctaH1[0].innerHTML = `${siteContent.cta.h1}`;

// Top Content Handling Here
let mainContentElements = Array.from(document.getElementsByClassName('main-content')[0].children);
mainContentElements.forEach((item, index) => {
  let items = 0;
  let props = 0;

  if (item.className === 'middle-img') {
    item.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  } else {
    let h4s = Array.from(item.getElementsByTagName('h4'));
    let paragraphs = Array.from(item.getElementsByTagName('p'));
    // console.log(paragraphs)
    h4s.forEach(item => {
      // console.log('items: ', items);
      // console.log('props: ', props);
      item.innerHTML = newMainContent[props][1];
      props++
      paragraphs[items].innerHTML = newMainContent[props][1];
      props++
      items++;
    });
  }
})

// Contacts Handling Here
let contactElements = Array.from(document.getElementsByClassName('contact')[0].children);
console.log(contactElements);
contactElements.forEach((item, index) => {
  item.innerHTML = contact[index][1];
});

// Footer Handling Here
document.getElementsByTagName('footer')[0].innerHTML = footer[0][1];



// ## Stretch Goals
//   * Update styles throughout the page as you see fit.Study what happens when you updated the DOM using style in JavaScript.  
//   * Study tomorrow's lesson on events and try to integrate a button that can update 
//     content on the site with a click of a button.You could build a similar data object
//     with new values to help you test the click event.

// ## Stretch Project
// This project is heavier on logic but employs some DOM manipulation to achieve it's goals. 
// Go check it out here: [stretch assignment](stretch - assignment) and see how far you can get. 
