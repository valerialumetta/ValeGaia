import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ShoeCard from './components/ShoeCard.vue'; // Importa il componente ShoeCard


// Definizione delle rotte
const routes = [
  { path: '/', component: HomePage },
  { path: '/shoes', component: ShoeCard }, // Rotta per la lista delle scarpe
];

// Creazione del router
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Creazione e montaggio dell'app
const app = createApp(App);
app.use(router);
app.mount('#app');