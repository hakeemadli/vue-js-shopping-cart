<!-- src/views/ProductView.vue -->
<template>
  <div class="product-view">
    <header>
      <router-link to="/" class="back-link">← Back to Products</router-link>
      <router-link to="/cart" class="cart-link">
        🛒 Cart ({{ cart.totalItems }})
      </router-link>
    </header>

    <ProductDetails :productId="productId" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores'
import ProductDetails from '@/components/ProductDetails.vue'

export default {
  name: 'ProductView',
  components: {
    ProductDetails
  },
  setup() {
    const route = useRoute()
    const cart = useCartStore()
    const productId = route.params.id

    return {
      cart,
      productId
    }
  }
}
</script>

<style scoped>
.product-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.back-link {
  color: #42b883;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
}

.cart-link {
  background: #42b883;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.cart-link:hover {
  background: #3aa876;
}
</style>