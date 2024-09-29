import { createStore } from 'vuex';

export default createStore({
  state: { // Raccoglie i dati delle scarpe
    shoes: [
      {
        id: 1,
        name: 'Adidas Samba',
        price: 119.99,
        images: [
          require('@/assets/adidas_samba-1.jpg'), 
          require('@/assets/adidas_samba-2.jpg')          
        ],
        description: 'Queste scarpe da calcio adidas Samba in edizione limitata sono impreziosite dal logo di Messi sulla linguetta. Le iconiche 3 strisce seghettate e la punta rinforzata completano la morbida tomaia in pelle per farti sentire sempre a tuo agio dentro e fuori dal campo. La suola in gomma è progettata per seguire ogni tuo movimento.'
      },
      {
        id: 2,
        name: 'Adidas Gazelle',
        price: 99.99,
        images: [
          require('@/assets/adidas_gazelle-1.jpg'),
          require('@/assets/adidas_gazelle-2.jpg'),
        ],
        description: 'Un classico retrò realizzato per la nuova generazione. Queste scarpe adidas Gazelle per ragazzi reinventano un amato design del 1991 con una tomaia in suede di alta qualità e un’estetica giocosa anni ’90. La suola in gomma offre comfort per tutto il giorno e una presa affidabile. Un classico del patrimonio che rinasce, queste scarpe ti connettono a decenni di sport e cultura ad ogni passo.'
      },
      {
        id: 3,
        name: 'Converse Star Player 76',
        price: 54.99,
        images: [
          require('@/assets/converse_star-player-76-1.jpg'),
          require('@/assets/converse_star-player-76-2.jpg'),
        ],
        description: 'Le Converse Star Player ’76 uniscono stile retrò e comfort moderno. Realizzate con una tomaia in tela resistente, presentano l’iconica stella laterale e dettagli vintage che richiamano le radici basket delle Converse. La suola in gomma vulcanizzata offre aderenza e durata, mentre il design versatile le rende perfette per un look casual e urbano. Ideali per chi cerca un classico senza tempo con un tocco contemporaneo.'
      },
      {
        id: 4,
        name: 'Nike Cortez',
        price: 79.99,
        images: [
          require('@/assets/nike_cortez-1.jpg'),
          require('@/assets/nike_cortez-2.jpg'),
        ],
        description: 'Le Nike Cortez sono una leggenda del mondo sneaker. Nate nel 1972, queste scarpe iconiche sono caratterizzate da una tomaia in pelle e materiali sintetici, che offrono durabilità e comfort. La loro silhouette elegante, completata dall’inconfondibile Swoosh laterale e dalla suola in gomma con motivo a spina di pesce, assicura uno stile intramontabile e una trazione eccellente. Perfette per chi ama combinare il fascino del vintage con un look casual e sportivo.'
      },
      {
        id: 5,
        name: 'Puma Smash 3.0',
        price: 69.99,
        images: [
          require('@/assets/puma_smash3.0-1.jpg'),
          require('@/assets/puma_smash3.0-2.jpg'),
        ],
        description: 'Le Puma Smash 3.0 combinano stile classico e comfort quotidiano. Realizzate con una tomaia in pelle morbida e una suola in gomma resistente, offrono una calzata confortevole e duratura. Il loro design pulito e versatile le rende perfette per completare qualsiasi look casual e sportivo.'
      },
      {
        id: 6,
        name: 'Vans Old Skool',
        price: 59.99,
        images: [
          require('@/assets/vans_old-skool-1.jpg'),
          require('@/assets/vans_old-skool-2.jpg'),
        ],
        description: 'Le Vans Old Skool sono un’icona dello stile streetwear. Caratterizzate dalla loro tomaia in tela resistente e suede, presentano l’iconico lato ondulato e una suola in gomma waffle per una trazione eccellente. Il design semplice e versatile le rende perfette per qualsiasi outfit, dal casual all’urbano. Confortevoli e alla moda, sono un must-have per ogni appassionato di sneakers.'
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

  getters: { // Permette a ShoesSneakers.vue di reperire i dati delle scarpe
    getShoes: (state) => state.shoes,
  },
});