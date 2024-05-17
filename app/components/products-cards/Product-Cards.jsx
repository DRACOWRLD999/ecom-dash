'use client';
import React from 'react'
import {useEffect, useState } from 'react'
import ProductCard from '../product-card/Product-Card.jsx'
import { getProducts } from '../../utls/utils.js'
export default function Products() {
let [products, setProducts] = useState([])
useEffect(() => {
    getProducts().then((res) => {
        setProducts(res)
    })
}, [])

return (
    <main className='grid grid-cols-5 gap-2'>
    {
        products.map((product) => (
        <ProductCard key={product.id} title={product.title} img={product.image} price={product.price} />
        ))
    }
    </main>
  )
}
