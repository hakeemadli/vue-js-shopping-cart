import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import getters from './getters'
import addItem from './actions/addItem'
import removeItem from './actions/removeItem'
import updateQuantity from './actions/updateQuantity'
import clearCart from './actions/clearCart'
import fetchProduct from './actions/fetchProduct'
import fetchProductList from './actions/fetchProductList'
import createCartState from './state'


export const useCartStore = defineStore(
  'cart', {
    state: createCartState,
    getters,
    actions: {
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      fetchProduct,
      fetchProductList
    }

  })
