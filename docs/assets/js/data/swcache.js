const resource = [

  /* --- CSS --- */
  '/dangtong-tech/docs/assets/css/style.css',

  /* --- PWA --- */
  '/dangtong-tech/docs/app.js',
  '/dangtong-tech/docs/sw.js',

  /* --- HTML --- */
  '/dangtong-tech/docs/index.html',
  '/dangtong-tech/docs/404.html',
  
    '/dangtong-tech/docs/categories/',
  
    '/dangtong-tech/docs/tags/',
  
    '/dangtong-tech/docs/archives/',
  
    '/dangtong-tech/docs/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/dangtong-tech/docs/assets/img/favicons/android-chrome-192x192.png',
    '/dangtong-tech/docs/assets/img/favicons/android-chrome-512x512.png',
    '/dangtong-tech/docs/assets/img/favicons/apple-touch-icon.png',
    '/dangtong-tech/docs/assets/img/favicons/favicon-16x16.png',
    '/dangtong-tech/docs/assets/img/favicons/favicon-32x32.png',
    '/dangtong-tech/docs/assets/img/favicons/favicon.ico',
    '/dangtong-tech/docs/assets/img/favicons/mstile-150x150.png',
    '/dangtong-tech/docs/assets/js/dist/categories.min.js',
    '/dangtong-tech/docs/assets/js/dist/commons.min.js',
    '/dangtong-tech/docs/assets/js/dist/home.min.js',
    '/dangtong-tech/docs/assets/js/dist/misc.min.js',
    '/dangtong-tech/docs/assets/js/dist/page.min.js',
    '/dangtong-tech/docs/assets/js/dist/post.min.js',
    '/dangtong-tech/docs/assets/js/dist/pvreport.min.js'

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

