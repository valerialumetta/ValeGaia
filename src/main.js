import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa il router
import ShoesSneakers from './views/ShoesSneakers.vue'; // Importa la pagina ShoesSneakers.vue
import store from './store/index'; // Importa lo store per vuex

const routes = [
  { 
    path: "/",
    name: "Shoes Sneakers",
    component: ShoesSneakers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router); // Usa il router importato
app.use(store); // Usa lo store importato
app.mount('#app'); // Collega l'applicazione Vue al DOM nel file index.html