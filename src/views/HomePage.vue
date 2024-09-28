<template>
  <div class="container">
    <header class="text-center">
  <h1>Scarpissima</h1>
  <h4>Il tuo negozio di scarpe online preferito</h4>
  <nav>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link class="nav-link" to="#">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link pagina-scarpe" to="#">Scarpe</router-link>
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

  <div class="row">
    <div class="col-md-12 d-flex justify-content-end mb-3">
      <form @submit.prevent="searchShoe" class="form-inline">
        <input type="text" v-model="searchQuery" class="form-control search-input" placeholder="Cerca una scarpa" />
        <button type="submit" class="btn btn-primary">Cerca</button>
      </form>
    </div>
  </div>

</header>

    <div class="row">
      <aside class="col-md-3 filtri">
        <p><router-link to="#">Scarpissima</router-link> / <strong>Scarpe</strong></p>
        <ul>
          <li><strong>Sneaker</strong></li>
          <li>Con tacco</li>
          <li>Sandali</li>
          <li>Senzo tacco</li>
          <li>Stivali</li>
          <li>Ballerine</li>
        </ul>
      </aside>

      <main class="col-md-9">
        <div class="row">
          <div v-for="shoe in filteredShoes" :key="shoe.id" class="col-md-4">
            <div :id="`carouselExampleControls-${shoe.id}`" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div v-for="(image, index) in shoe.images" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                  <img :src="image" class="d-block w-100" alt="Immagine della scarpa">
                </div>
              </div>
              <a class="carousel-control-prev" :href="`#carouselExampleControls-${shoe.id}`" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" :href="`#carouselExampleControls-${shoe.id}`" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <div class="card mt-2">
              <div class="card-body">
                <h5 class="card-title">{{ shoe.name }}</h5>
                <p class="card-text">{{ shoe.price }} €</p>
                <router-link to="#" class="btn btn-primary">Dettagli</router-link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  data() {
  return {
    searchQuery: '',
  };
},
  computed: {
    ...mapGetters(['getShoes']),
    filteredShoes() {
      return this.getShoes.filter(shoe =>
        shoe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
  searchShoe() {
    console.log(this.searchQuery);
  },
},
};
</script>

<style scoped>
header {
  background-color: white;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
}

.nav-item:hover {
  transition: 0.3s ease;
  background-color: rgb(2, 123, 255);
  border-radius: 5px;
  color: white;
}
.nav-link:hover {
  transition: 0.3s ease;
  color: white;
}
.pagina-scarpe {
  background-color: rgb(2, 123, 255);
  border-radius: 5px;
  color: white;
}

.search-input {
  width: 200px;
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.card {
  margin-bottom: 20px;
}
</style>
