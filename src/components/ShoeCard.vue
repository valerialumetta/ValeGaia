<template>
    <div class="col-md-4">
      <div class="card">
        <img :src="shoe.imageUrl" class="card-img-top" alt="Nome scarpa">
        <div class="card-body">
          <h5 class="card-title">{{ shoe.name }}</h5>
          <p class="card-text">{{ shoe.price }} €</p>
          <router-link :to="`/shoes/${shoe.id}`" class="btn btn-primary">Dettagli</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShoeCard',
    props: {
      shoe: Object,
    },
    data() {
    return {
      image: require('@/assets/adidas_samba.jpg') // Carica l'immagine correttamente
    };
  }
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>