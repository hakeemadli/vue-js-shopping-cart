<template>
  <div v-if="loading" class="loading">
    Loading product details...
  </div>

  <div v-else-if="error" class="error">
    {{ error }}
  </div>

  <div v-else-if="product" class="product-details">
    <div class="product-image">
      <img :src="product.image" :alt="product.title">
    </div>
    
    <div class="product-info">
      <h1>{{ product.title }}</h1>
      <p class="category">{{ product.category }}</p>
      <p class="description">{{ product.description }}</p>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      
      <div class="actions">
        <button 
          @click="addToCart" 
          class="add-to-cart"
          :disabled="adding"
        >
          {{ adding ? 'Adding to Cart...' : 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores'
import { toast } from 'vue3-toastify'

export default {
  name: 'ProductDetails',
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const cart = useCartStore()
    const product = ref(null)
    const loading = ref(true)
    const error = ref(null)
    const adding = ref(false)

    const loadProduct = async () => {
      loading.value = true
      error.value = null
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${props.productId}`)
        if (!response.ok) {
          throw new Error('Product not found')
        }
        product.value = await response.json()
      } catch (err) {
        error.value = 'Failed to load product details'
        console.error(err)
      } finally {
        loading.value = false
      }
    }

    const addToCart = async () => {
      if (!product.value) return
      
      adding.value = true
      try {
        cart.addItem(product.value)
        toast(`Added ${product.value.title} to cart`, {
          type: 'success',
          autoClose: 2000,
          position: toast.POSITION.TOP_RIGHT
        })
      } catch (err) {
        toast('Failed to add item to cart', {
          type: 'error',
          autoClose: 2000,
          position: toast.POSITION.TOP_RIGHT
        })
      } finally {
        adding.value = false
      }
    }

    onMounted(loadProduct)

    return {
      product,
      loading,
      error,
      adding,
      addToCart
    }
  }
}
</script>

<style scoped>
.product-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  align-items: start;
}

.product-image {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.product-image img {
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  font-size: 2em;
  color: #2c3e50;
  margin: 0;
}

.category {
  color: #666;
  font-size: 1.1em;
  text-transform: capitalize;
  margin: 0;
}

.description {
  color: #2c3e50;
  line-height: 1.6;
  margin: 0;
}

.price {
  font-size: 2em;
  color: #42b883;
  font-weight: bold;
  margin: 0;
}

.actions {
  margin-top: 20px;
}

.add-to-cart {
  padding: 15px 30px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.2s;
}

.add-to-cart:hover:not(:disabled) {
  background: #3aa876;
  transform: translateY(-2px);
}

.add-to-cart:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading, .error {
  text-align: center;
  padding: 40px;
  font-size: 1.2em;
  color: #666;
}

.error {
  color: #e74c3c;
}
</style>
