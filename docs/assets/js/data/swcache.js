const resource = [

  /* --- CSS --- */
  '/dangtong-tech/_site/assets/css/style.css',

  /* --- PWA --- */
  '/dangtong-tech/_site/app.js',
  '/dangtong-tech/_site/sw.js',

  /* --- HTML --- */
  '/dangtong-tech/_site/index.html',
  '/dangtong-tech/_site/404.html',
  
    '/dangtong-tech/_site/categories/',
  
    '/dangtong-tech/_site/tags/',
  
    '/dangtong-tech/_site/archives/',
  
    '/dangtong-tech/_site/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/dangtong-tech/_site/assets/img/favicons/android-chrome-192x192.png',
    '/dangtong-tech/_site/assets/img/favicons/android-chrome-512x512.png',
    '/dangtong-tech/_site/assets/img/favicons/apple-touch-icon.png',
    '/dangtong-tech/_site/assets/img/favicons/favicon-16x16.png',
    '/dangtong-tech/_site/assets/img/favicons/favicon-32x32.png',
    '/dangtong-tech/_site/assets/img/favicons/favicon.ico',
    '/dangtong-tech/_site/assets/img/favicons/mstile-150x150.png',
    '/dangtong-tech/_site/assets/js/dist/categories.min.js',
    '/dangtong-tech/_site/assets/js/dist/commons.min.js',
    '/dangtong-tech/_site/assets/js/dist/home.min.js',
    '/dangtong-tech/_site/assets/js/dist/misc.min.js',
    '/dangtong-tech/_site/assets/js/dist/page.min.js',
    '/dangtong-tech/_site/assets/js/dist/post.min.js',
    '/dangtong-tech/_site/assets/js/dist/pvreport.min.js'

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

