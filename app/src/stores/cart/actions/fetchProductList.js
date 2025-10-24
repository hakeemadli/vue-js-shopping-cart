export default async function fetchProductList() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/`)
        
        if (!response.ok) {
            throw new Error('Product not found')
        }

        const product = await response.json()
        return product
        
    } catch (error) {
        console.error("Failed to fetch product:", error)
        throw error
    }
}