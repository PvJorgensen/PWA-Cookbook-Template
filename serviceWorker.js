if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./serviceWorker.js')
	.then(reg => console.log('service worker registered', reg))
	.catch(err => console.error('service worker not registered', err)) 
}

// Installere service worker
self.addEventListener('install', event => {
	console.log('Service Worker has been installed');
})

// Aktivere Service Worker
self.addEventListener('activate', event => {
	console.log('Service Worker has been activated');
})

// Fetch event
self.addEventListener('fetch', event => {
	console.log('Fetch event', event)
})


caches.open('my-cache').then(function(cache) {
	// Cache er åben
  });

  // Array med filer
const assets = [
	'./img/icons/favicon-16x16.png', 
	'./img/icons/favicon-32x32.png',
	'./css/materialize.min.css',
	'./css/styles.css',
	'./js/materialize.min.js',
	'./js/ui.js',
	'./manifest.json',
	'./serviceWorker.js',
	'./pages/about.html',
	'./index.html'

  ]
  
  caches.open('my-cache').then(cache => {
	// Tilføj enkelt fil
	cache.add('/path/to/my/file.jpg');
	// Tilføj flere filer
	cache.addAll(assets); 
  });