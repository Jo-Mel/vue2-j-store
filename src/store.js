import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // STATE
  state: {
    cartContent: [],
  },
  // MUTATION
  mutations: {
    addProductToCart(state, product) {
      // {id, title, image, price, q}

      const pr = {
        id: product.id,
        title: product.title,
        image: product.image,
        basePrice: product.price,
        desc: product.description,
        category: product.category,
        quantity: 1,
      };

      const inCartProduct = state.cartContent.find(
        (item) => item.id === product.id
      );

      if (inCartProduct) {
        pr.quantity = inCartProduct.quantity + 1;
        const index = state.cartContent.indexOf(inCartProduct);

        state.cartContent.splice(index, 1, pr);
      } else {
        state.cartContent.push(pr);
      }
    },
    // la mutation non decrementa la quantità, rimuove l'intero prodotto dal carrello
    removeFromCart(state, productId) {
      state.cartContent = state.cartContent.filter(
        (item) => item.id !== productId
      );
    },

    setProductQuantity(state, payload) {
      // payload == { id, quantity }
      const inCart = state.cartContent.find((item) => item.id === payload.id);

      if (inCart) {
        const index = state.cartContent.indexOf(inCart);
        inCart.quantity = payload.quantity;
        if (inCart.quantity <= 0) {
          state.cartContent = state.cartContent.filter(
            (item) => item.id !== inCart.id
          );
        } else {
          state.cartContent.splice(index, 1, inCart);
        }
      }
    },
  },
  // GETTERS
  getters: {
    cartTotalItems(state) {
      return state.cartContent.length;
    },
    cartTotalQuantity(state) {
      let quantity = 0;

      for (const product of state.cartContent) {
        quantity += product.quantity;
      }

      return quantity;
    },

    orderTotal(state) {
      let total = 0;

      for (const product of state.cartContent) {
        total += product.basePrice * product.quantity;
      }

      return total;
    },
  },
});
