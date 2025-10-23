<!-- src/views/CartView.vue -->
<template>
  <div class="cart">
    <header>
      <h1>🛒 Your Cart</h1>
      <router-link to="/" class="back-link">← Continue Shopping</router-link>
    </header>

    <Cart />

    <div v-if="cart.items.length > 0" class="checkout-section">
      <button class="checkout-btn">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores'
import Cart from '@/components/Cart.vue'

export default {
  name: 'CartView',
  components: {
    Cart
  },
  setup() {
    const cart = useCartStore()
    return { cart }
  }
}
</script>

<style scoped>
.cart {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f8f9fa;
}

h1 {
  font-size: 2em;
  color: #2c3e50;
  margin: 0;
}

.back-link {
  display: flex;
  align-items: center;
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.back-link:hover {
  color: #3aa876;
}

.checkout-section {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #f8f9fa;
  display: flex;
  justify-content: flex-end;
}

.checkout-btn {
  padding: 15px 30px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.checkout-btn:hover {
  background: #3aa876;
  transform: translateY(-2px);
}

.checkout-btn:active {
  transform: translateY(0);
}

.clear-btn {
  background: #e74c3c;
  color: white;
  margin-right: 10px;
}
</style>