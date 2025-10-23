export default function updateQuantity(pid, newQuantity){
    if (newQuantity < 1){
        this.removeItem(pid)
        return
    }

    const item = this.items.find(item => item.id === pid)
    
    if (item){
        item.quantity = newQuantity
    }
}