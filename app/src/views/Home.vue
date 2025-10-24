<!-- src/views/HomeView.vue -->
<template>
  <div class="home">
    <header>
      <h1>🛍️ Fake Store</h1>
      <router-link to="/cart" class="cart-link">
        🛒 Cart ({{ cart.totalItems }})
      </router-link>
    </header>

    <ProductList />
  </div>
</template>

<script>
import { useCartStore } from '@/stores'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  setup() {
    const cart = useCartStore()
    return { cart }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

h1 {
  font-size: 2em;
  color: #2c3e50;
  margin: 0;
}

.cart-link {
  background: #42b883;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
}

.cart-link:hover {
  background: #3aa876;
}
</style>