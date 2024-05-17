'use server';
async function getProducts() {
    let products = await fetch('https://fakestoreapi.com/products')
    let res = await products.json()
    return res
    }

export { getProducts }