<template>
  <div class="shop">
    <h1>All products</h1>

    <div class="container">
      <input
        type="text"
        class="search"
        @keyup="search"
        placeholder="Search products..."
      />
    </div>

    <div v-if="loading" class="loading">
      <img src="../assets/loader.svg" />
    </div>

    <div v-else class="container shop-container">
      <div class="item-card" v-for="item in products" :key="item.id">
        <!-- BEM  style -->
        <div class="item-card__image">
          <img :src="item.image" alt="item-image" />
        </div>
        <div class="item-card__desc">
          <div class="item-card__title" :title="item.title">
            {{ item.title }}
          </div>
          <hr class="decoration" />
          <!-- <div class="item-card__category">{{ item.category }}</div> -->
          <div class="item-card__price">€ {{ item.price }}</div>
          <div class="item-card__actions">
            <a href="#" class="btn big" @click.prevent="addToCart(item)"
              >Add to Cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProducts } from "@/api/fakestore";

// @ is an alias to /src

export default {
  data() {
    return {
      allProducts: [],
      products: [],
      loading: false,
    };
  },
  // life cycle hook method
  mounted() {
    this.loading = true;
    getProducts().then((data) => {
      this.products = data;
      this.allProducts = data;
      this.loading = false;
    });
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addProductToCart", product);
      this.$toasted.show("Item added in cart", {
        theme: "outline",
        duration: 5000,
      });
    },
    search(event) {
      const terms = event.target.value;

      if (terms !== "") {
        this.products = this.allProducts.filter((item) =>
          item.title.toLowerCase().includes(terms.toLowerCase())
        );
      } else {
        this.products = this.allProducts;
      }
    },
  },
};
</script>

<style scoped>
.loading {
  height: 50vh;
  align-items: center;
  display: flex;
  justify-content: center;
}

.shop-container {
  /* border: 1px solid #ccc; */
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}

.item-card {
  width: 33.33%;
  height: 400px;
  /* border: 1px solid black; */
  overflow: hidden;
  padding: 20px;
  margin-top: 44px;
}

.item-card__image {
  height: 200px;
  overflow: hidden;
}

.item-card__image img {
  max-width: 100%;
  height: 100%;
}

.item-card__desc {
  height: 200px;
  padding: 20px;
}

.item-card__title {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  font-family: "Dancing Script", cursive;
  font-size: 30px;
  font-weight: bold;
  color: var(--primary-color);
}

.decoration {
  width: 30%;
  margin-top: 6px;
  color: black;
  display: inline-block;
}

.item-card__price {
  padding-top: 10px;
  color: black;
  font-size: 20px;
}

.item-card__actions {
  padding-top: 30px;
}

input.search {
  width: 90%;
  padding: 6px 12px;
  border-radius: 30px;
  margin: 10px 0;
  border: 1px solid #ccc;
  outline: none;
  font-size: 15px;
}

/* Mobile media query */
@media only screen and (max-width: 768px) {
  .item-card {
    width: 100%;
  }
}
</style>
