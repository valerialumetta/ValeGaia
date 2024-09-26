<template>
  <div class="container">
    <header class="text-center">
      <h1>Scarpissima</h1>
      <h4>Il tuo negozio di scarpe online preferito</h4>
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shoes">Scarpe</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">Accessori</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">Novità</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="#">Saldi</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="row">
      <aside class="col-md-3">
        <h5>Filtri</h5>
        <p><strong>Scarpissima / Scarpe</strong></p>
        <ul>
          <li><strong>Tacchi</strong></li>
          <li>Da ginnastica</li>
          <li>Texani</li>
          <li>Sandali</li>
          <li>Senzo tacco</li>
          <li>Anfibi</li>
          <li>Stivali</li>
          <li>Mocassini</li>
          <li>Ballerine</li>
        </ul>
        <h5>Filtri per numero e colore</h5>
        <!-- Qui puoi aggiungere i filtri per numero di scarpa e colore -->
      </aside>

      <main class="col-md-9">
        <div class="row">
          <ShoeCard v-for="shoe in shoes" :key="shoe.id" :shoe="shoe" />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import ShoeCard from '../components/ShoeCard.vue';

export default {
  name: 'HomePage',
  components: {
    ShoeCard,
  },
  data() {
    return {
      shoes: [
        { id: 1, name: 'Scarpa A', price: 49.99, imageUrl: require('@/assets/adidas_samba.jpg') },
        { id: 2, name: 'Scarpa B', price: 59.99, imageUrl: 'link_to_image_B' },
        { id: 3, name: 'Scarpa C', price: 69.99, imageUrl: 'link_to_image_C' },
        // Aggiungi altre scarpe qui
      ],
    };
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
</style>