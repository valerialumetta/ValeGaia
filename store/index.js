import { createStore } from 'vuex';

export default createStore({
  state: {
    shoes: [
      {
        id: 1,
        name: 'Adidas Samba',
        price: 119.99,
        images: [
          require('@/assets/adidas_samba-1.jpg'), 
          require('@/assets/adidas_samba-2.jpg')          
        ]
      },
      {
        id: 2,
        name: 'Adidas Gazelle',
        price: 99.99,
        images: [
          require('@/assets/adidas_gazelle-1.jpg'),
          require('@/assets/adidas_gazelle-2.jpg'),
        ]
      },
      {
        id: 3,
        name: 'Converse Star Player 76',
        price: 54.99,
        images: [
          require('@/assets/converse_star-player-76-1.jpg'),
          require('@/assets/converse_star-player-76-2.jpg'),
        ]
      },
      {
        id: 4,
        name: 'Nike Cortez',
        price: 79.99,
        images: [
          require('@/assets/nike_cortez-1.jpg'),
          require('@/assets/nike_cortez-2.jpg'),
        ]
      },
      {
        id: 5,
        name: 'Puma Smash 3.0',
        price: 69.99,
        images: [
          require('@/assets/puma_smash3.0-1.jpg'),
          require('@/assets/puma_smash3.0-2.jpg'),
        ]
      },
      {
        id: 6,
        name: 'Vans Old Skool',
        price: 59.99,
        images: [
          require('@/assets/vans_old-skool-1.jpg'),
          require('@/assets/vans_old-skool-2.jpg'),
        ]
      },
    ],
  },
  mutations: {
    setShoes(state, shoes) {
      state.shoes = shoes;
    },
  },
  actions: {
    updateShoes({ commit }, shoes) {
      commit('setShoes', shoes);
    },
  },
  getters: {
    getShoes: (state) => state.shoes,
  },
});