<template>
  <div>
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else class="products">
      <div v-for="product in products" :key="product.id" class="product-card">
        <router-link :to="'/product/' + product.id" class="product-link">
          <img :src="product.image" :alt="product.title" />
          <h3>{{ product.title }}</h3>
        </router-link>
        <p class="price">${{ product.price.toFixed(2) }}</p>
        <p class="category">{{ product.category }}</p>
        <button @click="addToCart(product)" :disabled="loading">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores'
import { toast } from 'vue3-toastify'

export default {
    setup() {
        const cart = useCartStore()
        const products = ref([])
        const loading = ref(true)

        const loadProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                products.value = await response.json()
            } catch (error) {
                console.error('Failed to load products:', error)
            } finally {
                loading.value = false
            }
        }

        const addToCart = (product) => {
            try {
                cart.addItem(product)
                toast(`Added ${product.title} to cart`, {
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
            }
        }

        onMounted(loadProducts)

        return {
            products,
            loading,
            addToCart
        }
    }
}
</script>

<style scoped>
.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.product-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-link {
    text-decoration: none;
    color: inherit;
    display: block;
    margin-bottom: 12px;
}

.product-link:hover {
    opacity: 0.9;
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 12px;
    transition: transform 0.2s;
}

.product-link:hover img {
    transform: scale(1.05);
}

.price {
    font-size: 1.2em;
    color: #e74c3c;
    font-weight: bold;
    margin: 8px 0;
}

.category {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 10px;
}

button {
    background: #42b883;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover:not(:disabled) {
    background: #3aa876;
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.loading {
    text-align: center;
    font-size: 1.2em;
    color: #666;
    padding: 40px;
}
</style>