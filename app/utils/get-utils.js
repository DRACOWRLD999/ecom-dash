'use server';
async function getProducts() {
    let products = await fetch('https://fakestoreapi.com/products',{next:{
        revalidate:3600,
    }})
    let res = await products.json()
    return res
    }

export { getProducts }