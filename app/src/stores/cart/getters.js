export default{
    totalItems : (state) =>{
        return state.items.reduce((sum, item) =>
        sum + item.quantity, 0)
    },

     totalPrice : (state) =>{
        return state.items.reduce((sum, item) =>
        sum + item.price * item.quantity, 0)
    },

    hasItems : (state) => (pid) => {
        return state.items.some(item => item.id === pid)
    }
}