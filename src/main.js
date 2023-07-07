import { createApp } from 'vue';

// Import Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';

// Import Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

library.add(solidStar, regularStar);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
