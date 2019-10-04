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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll('nav a');
navBar.forEach((navLink, i) => {
  navLink.textContent = siteContent.nav[`nav-item-${i + 1}`];
})

let ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta.h1;

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

let ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent.cta["img-src"];

let topTextContentH = document.querySelectorAll('.top-content .text-content h4');
topTextContentH[0].textContent = siteContent['main-content']['features-h4'];
topTextContentH[1].textContent = siteContent['main-content']['about-h4'];

let topTextContentP = document.querySelectorAll('.top-content .text-content p');
topTextContentP[0].textContent = siteContent['main-content']['features-content'];
topTextContentP[1].textContent = siteContent['main-content']['about-content'];

let middleContentImage = document.getElementById('middle-img');
middleContentImage.src = siteContent['main-content']['middle-img-src'];

let bottomTextContentH = document.querySelectorAll('.bottom-content .text-content h4');
bottomTextContentH[0].textContent = siteContent['main-content']['services-h4'];
bottomTextContentH[1].textContent = siteContent['main-content']['product-h4'];
bottomTextContentH[2].textContent = siteContent['main-content']['vision-h4'];

let bottomTextContentP = document.querySelectorAll('.bottom-content .text-content p');
bottomTextContentP[0].textContent = siteContent['main-content']['services-content'];
bottomTextContentP[1].textContent = siteContent['main-content']['product-content'];
bottomTextContentP[2].textContent = siteContent['main-content']['vision-content'];

let contactH = document.querySelector('.contact h4');
contactH.textContent = siteContent.contact['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;