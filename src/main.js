import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; //importa il router
import ShoesSneakers from './views/ShoesSneakers.vue'; //importa la pagina ShoesSneakers.vue
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

app.use(router); //usa il router importato
app.use(store); // Usa lo store importato
app.mount('#app');
