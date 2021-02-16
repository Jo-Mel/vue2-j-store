<template>
  <div>
    <div class="edit-item-quantity">
      <div class="decrease" @click.prevent="decreaseQuantity()">
        <i class="las la-minus-circle"></i>
      </div>
      <div class="quantity">
        {{ product.quantity }}
      </div>
      <div class="increase" @click.prevent="incrementQuantity()">
        <i class="las la-plus-circle"></i>
      </div>
    </div>
    <div class="delete-item">
      <a href="#" @click.prevent="$store.commit('removeFromCart', product.id)">
        <span><i class="lar la-times-circle"></i></span> Remove</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { required: true, type: Object },
  },
  methods: {
    incrementQuantity() {
      this.$store.commit("setProductQuantity", {
        id: this.product.id,
        quantity: this.product.quantity + 1,
      });
    },
    decreaseQuantity() {
      this.$store.commit("setProductQuantity", {
        id: this.product.id,
        quantity: this.product.quantity - 1,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit-item-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
}

.edit-item-quantity > div {
  padding-left: 12px;
  padding-bottom: 4px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}

.delete-item {
  padding: 10px 12px;
  margin-left: 6px;
  font-size: 15px;
  display: flex;
  justify-content: center;
}

.delete-item span {
  font-size: 20px;
}

.increase:hover,
.decrease:hover {
  cursor: pointer;
  transform: scale(1.2);
}

a {
  color: var(--secondary-color);
  text-decoration: none;
  margin-left: 12px;
}

a:hover {
  transform: scale(1.04);
}
</style>
