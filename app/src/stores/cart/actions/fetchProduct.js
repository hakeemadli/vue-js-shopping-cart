export default async function fetchProduct(pid){

    if (this.hasItem(pid))
        return

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${pid}`)

        if (!response.ok){
            throw new Error('product not found')
        } 

        const product = await response.json()
        this.addItem(product)
        
    } catch (error) {
        console.error("Failed to fetch products:", error)

    }
}