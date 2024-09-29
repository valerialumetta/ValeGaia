<template>
  <div class="container">
    <header class="text-center">
      <h1>Scarpissima</h1>
      <h4>Il tuo negozio di scarpe online preferito</h4>

      <!-- Navbar -->
      <nav>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link" to="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link shoe-page" to="#">Scarpe</router-link>
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

      <!-- Barra di ricerca -->
      <div class="row">
        <div class="col-md-12 d-flex justify-content-end mb-3">
          <form @submit.prevent="searchShoe" class="form-inline">
            <input type="text" v-model="searchQuery" class="form-control search-input" placeholder="Cerca" />
            <button type="submit" class="btn btn-primary">Cerca</button>
          </form>
        </div>
      </div>

    </header>

    <div class="row">

      <!-- Filtri e breadcrumb -->
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

            <!-- Carosello -->
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
                <button @click="selectShoe(shoe)" class="btn btn-primary">Dettagli</button>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>

    <!-- Finestra modale -->
    <div v-if="selectedShoe" class="modal" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Descrizione</h5>
            <button type="button" class="close" @click="closeModal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{ selectedShoe.description }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'; // Importa la libreria Vue per la gestione dello stato

export default {
  name: 'ShoesSneakers',
  data() {
    return {
      searchQuery: '',
      selectedShoe: null, // Variabile per la scarpa selezionata
    };
  },

  // Per la barra di ricerca
  computed: {
    ...mapGetters(['getShoes']), // Si accede alla lista delle scarpe
    filteredShoes() { // Il metodo filter filtra in base alla SearchQuery
      return this.getShoes.filter(shoe =>
        shoe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },

  methods: {
    searchShoe() { // Per la ricerca
      console.log(this.searchQuery);
    },
    selectShoe(shoe) {
      // Per mostrare i dettagli nella finestra modale
      this.selectedShoe = shoe;
    },
    closeModal() {
      // Chiude la finestra modale
      this.selectedShoe = null;
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

.shoe-page {
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

.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-dialog {
  width: 500px;
}

.modal-content {
  padding: 20px;
  background-color: white;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  padding: 10px 0;
}
</style>