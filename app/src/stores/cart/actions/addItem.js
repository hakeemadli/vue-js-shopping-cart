export default function addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id)

    if (existingItem) {
        existingItem.quantity += 1
    } else {
        this.items.push({
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: 1
        })
    }
}