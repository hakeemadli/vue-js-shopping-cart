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
.cart-link {
  background: #42b883;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
}
.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}
.product-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 12px;
}
.price {
  font-size: 1.2em;
  color: #e74c3c;
  font-weight: bold;
}
button {
  margin-top: 10px;
  padding: 8px 16px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.loading {
  text-align: center;
  font-size: 1.2em;
  color: #555;
}
</style>