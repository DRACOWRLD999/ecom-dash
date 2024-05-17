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
    <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 place-items-center'>
    {
        products.map((product) => (
        <ProductCard key={product.id} title={product.title} img={product.image} price={product.price} />
        ))
    }
    </div>
  )
}
