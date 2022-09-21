const resource = [

  /* --- CSS --- */
  '/dangtong-tech/assets/css/style.css',

  /* --- PWA --- */
  '/dangtong-tech/app.js',
  '/dangtong-tech/sw.js',

  /* --- HTML --- */
  '/dangtong-tech/index.html',
  '/dangtong-tech/404.html',
  
    '/dangtong-tech/categories/',
  
    '/dangtong-tech/tags/',
  
    '/dangtong-tech/archives/',
  
    '/dangtong-tech/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/dangtong-tech/assets/img/favicons/android-chrome-192x192.png',
    '/dangtong-tech/assets/img/favicons/android-chrome-512x512.png',
    '/dangtong-tech/assets/img/favicons/apple-touch-icon.png',
    '/dangtong-tech/assets/img/favicons/favicon-16x16.png',
    '/dangtong-tech/assets/img/favicons/favicon-32x32.png',
    '/dangtong-tech/assets/img/favicons/favicon.ico',
    '/dangtong-tech/assets/img/favicons/mstile-150x150.png',
    '/dangtong-tech/assets/js/dist/categories.min.js',
    '/dangtong-tech/assets/js/dist/commons.min.js',
    '/dangtong-tech/assets/js/dist/home.min.js',
    '/dangtong-tech/assets/js/dist/misc.min.js',
    '/dangtong-tech/assets/js/dist/page.min.js',
    '/dangtong-tech/assets/js/dist/post.min.js',
    '/dangtong-tech/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  
    'raw.githubusercontent.com',
  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

