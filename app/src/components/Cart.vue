<template>
  <div class="cart-container">
    <div v-if="cart.items.length === 0" class="empty-cart">
      <p>Your cart is empty</p>
      <router-link to="/" class="continue-shopping">Continue Shopping</router-link>
    </div>
    <div v-else class="cart-content">
      <div class="cart-summary">
        <h2>🛒 Cart Summary</h2>
        <div class="summary-details">
          <p>Items in cart: <span>{{ cart.totalItems }}</span></p>
          <p>Total: <span>${{ cart.totalPrice.toFixed(2) }}</span></p>
        </div>
      </div>

      <ul class="cart-items">
        <li v-for="item in cart.items" :key="item.id" class="cart-item">
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p class="item-price">${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
          <div class="item-controls">
            <div class="quantity-controls">
              <button 
              @click="cart.updateQuantity(item.id, item.quantity - 1)"
                class="quantity-btn"
                :disabled="item.quantity <= 1"
              >−</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button 
                @click="cart.updateQuantity(item.id, item.quantity + 1)"
                class="quantity-btn"
              >+</button>
            </div>
            <button @click="cart.removeItem(item.id)" class="remove-btn">
              Remove
            </button>

          </div>
        </li>
      </ul>

      <div class="cart-actions">
        <button @click="cart.clearCart" class="clear-btn">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores';

export default {
  setup() {
    const cart = useCartStore()
    return { cart }
  }
}
</script>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.empty-cart {
  text-align: center;
  padding: 40px;
}

.empty-cart p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

.continue-shopping {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.continue-shopping:hover {
  background-color: #3aa876;
}

.cart-summary {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

.cart-summary h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.5em;
}

.summary-details {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}

.summary-details p {
  margin: 5px 0;
  color: #666;
}

.summary-details span {
  font-weight: bold;
  color: #2c3e50;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.item-info h3 {
  margin: 0 0 5px 0;
  color: #2c3e50;
  font-size: 1.1em;
}

.item-price {
  color: #42b883;
  font-weight: bold;
  margin: 0;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 20px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity {
  min-width: 30px;
  text-align: center;
  font-weight: bold;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: white;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.2s;
}

.quantity-btn:hover:not(:disabled) {
  background: #f8f9fa;
  border-color: #42b883;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.remove-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #ff4757;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.remove-btn:hover {
  background: #ff6b81;
}

.cart-actions {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}

.clear-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: #2c3e50;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.clear-btn:hover {
  background: #34495e;
}
</style>