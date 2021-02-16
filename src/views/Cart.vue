<template>
  <div class="container">
    <h1>Your shopping cart</h1>
    <div class="cart-summary">
      <div
        v-if="$store.state.cartContent.length === 0"
        class="cart-summary__cart cart-summary__cart--noitems"
      >
        <p>No items in your cart yet</p>
      </div>
      <div v-else class="cart-summary__cart">
        <div
          class="product"
          v-for="item in $store.state.cartContent"
          :key="item.id"
        >
          <div class="product__image">
            <img :src="item.image" alt="item-img" />
          </div>
          <div class="product__meta">
            <div class="product__title">
              {{ item.title }}
            </div>
            <div class="product__category">
              {{ item.category }}
            </div>
            <div class="product__desc" :title="item.desc">
              {{ item.desc }}
            </div>
          </div>
          <div class="product__actions">
            <QuantitySelector :product="item" />
          </div>
          <div class="product__price">
            € {{ (item.basePrice * item.quantity).toFixed(2) }}
          </div>
        </div>
      </div>
      <div class="cart-summary__bill">
        <h1>Your bill</h1>
        <div class="main-bill">
          <div class="bill-row">
            <p>Subtotal</p>
            <span> € {{ $store.getters.orderTotal.toFixed(2) }}</span>
          </div>

          <div class="bill-row">
            <p>Shipping</p>
            <span>€ 0,00</span>
          </div>

          <div class="bill-row total">
            <p>Total</p>
            <span> € {{ $store.getters.orderTotal.toFixed(2) }}</span>
          </div>
        </div>
        <div class="bottom-bill">
          <button class="btn" @click="startConfetti">Check Out</button>
          <router-link to="/">Continue Your Shopping</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuantitySelector from "@/components/QuantitySelector.vue";
import confetti from "canvas-confetti";

export default {
  components: {
    QuantitySelector,
  },
  methods: {
    startConfetti() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      this.$toasted.show("Thank you for your fake order 🤣", {
        theme: "outline",
        duration: 5000,
      });
    },
  },
};
</script>

<style scoped>
.cart-summary {
  margin: 20px;
  display: flex;
}

.cart-summary__cart--noitems {
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 20px 0;
  display: flex;
}

.cart-summary__cart {
  flex: 1;
}

.cart-summary__bill {
  width: 340px;
  padding: 0 15px;
}

.product {
  display: flex;
  border-bottom: 1px solid var(--primary-color);
  margin: 0 20px;
}

.product > div {
  padding: 20px 15px;
  text-align: left;
}

.product__title {
  font-family: "Dancing Script", cursive;
  font-size: 22px;
  font-weight: bold;
  color: var(--primary-color);
}

.product__image {
  width: 200px;
  height: 200px;
  /* padding: 20px; */
}

.product__image img {
  width: 100%;
  height: 100%;
}

.product__desc {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
}

.product__meta {
  flex: 1;
}

.product__actions {
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product__price {
  display: flex;
  align-items: center;
}

.cart-summary__bill h1 {
  padding: 4px;
  /* border-top: 1px solid var(--primary-color); */
  border-bottom: 1px solid #ccc;
  margin-bottom: 8px;
}

.bill-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.total {
  border-top: 1px solid #ccc;
  padding-top: 8px;
}

.bottom-bill {
  display: flex;
  flex-direction: column;
}

.bottom-bill > * {
  margin: 10px 0;
}

/* Mopbile media query */
@media only screen and (max-width: 946px) {
  .cart-summary {
    flex-direction: column;
    margin: 0;
  }

  .product {
    flex-wrap: wrap;
  }

  .product__image,
  .product__meta {
    width: 100%;
    flex: 0 0 100%;
    max-height: 250px;
  }
  .product__image {
    margin-bottom: 20px;
    text-align: center !important;
  }

  .product__image img {
    width: auto;
    max-width: 100%;
    height: inherit;
  }

  .product__actions,
  .product__price {
    width: 50%;
    justify-content: center;
  }

  .cart-summary__bill {
    width: 100%;
    padding: 0 15px;
  }
}
</style>
