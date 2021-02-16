<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Shop</router-link> |
      <router-link class="cart-link" to="/my-cart"
        ><i class="my-bag las la-shopping-bag"></i>
        <span class="bag-counter">{{ $store.getters.cartTotalQuantity }}</span>
      </router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #185674;
  --secondary-color: #b0684f;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

a {
  color: var(--secondary-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1 {
  font-family: "Dancing Script", cursive;
  font-size: 35px;
  font-weight: bold;
  color: var(--primary-color);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: var(--primary-color);
}

.my-bag {
  font-size: 28px;

  /* margin-left: 2px; */
}

.cart-link {
  position: relative;
  overflow: auto;
}

.bag-counter {
  position: absolute;
  top: -10px;
  right: -12px;
  background-color: var(--secondary-color);
  font-size: 11px;
  padding: 0 4px;
  color: white;
  border-radius: 4px;
}

.toasted.outline {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.btn {
  border: 1px solid var(--primary-color);
  border-radius: 30px;
  padding: 10px 30px;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.btn:hover {
  cursor: pointer;
  background-color: #2c5e77;
  text-decoration: none;
}

.btn:active {
  box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
  color: #ddd;
}

.btn.big {
  font-weight: bold;
}
</style>
