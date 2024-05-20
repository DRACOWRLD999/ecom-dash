'use client'
import React, { useEffect, useState } from 'react';
import { Input, Image, Textarea, Button, Skeleton } from "@nextui-org/react";
import Link from 'next/link';

async function getProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: { revalidate: 3600 }
    });
    const product = await response.json();
    return product;
}

export default function Page({ params }) {
    const [product, setProduct] = useState({});
    let [loaded, setLoaded] = useState(false);
    useEffect(() => {
        getProduct(params.id).then((res) => {
            setProduct(res);
            setLoaded(true);
        });
    }, [params.id]);

    return (
        <>
        <h1 className='text-center text-2xl font-bold my-5'>Product</h1>
        <div className='flex flex-row gap-x-10 justify-center my-5 items-center '>

            <Skeleton isLoaded={loaded} height={300} width={300} className='rounded-xl h-[430px] flex items-center justify-center'>
            <Image src={product.image} alt={product.title} width={300} height={300}  />
            </Skeleton>
            <div className='flex flex-row'>
            <div className='flex flex-col gap-4 w-96'>
                <Textarea
                    isReadOnly
                    variant="flat"
                    labelPlacement="outside"
                    className="max-w-xs"
                    placeholder="Product title"
                    label="Title"
                    value={product.title}
                />
                <Textarea
                    isReadOnly
                    variant="flat"
                    labelPlacement="outside"
                    className="max-w-xs"
                    label="Description"
                    placeholder="Product description"
                    value={product.description}
                />
            <Link href={`/edit-product/${params.id}`} className='w-20'>
                <Button >Edit Product</Button>
            </Link>
            </div>
                <div className='flex flex-col gap-4'>
                <Textarea
                    isReadOnly
                    variant="flat"
                    labelPlacement="outside"
                    className="max-w-xs"
                    label="Category"
                    placeholder="Product description"
                    value={product.category}
                />
                <Textarea
                    isReadOnly
                    variant="flat"
                    labelPlacement="outside"
                    className="max-w-xs"
                    label="Price"
                    placeholder="Product price"
                    value={product.price}
                />
                </div>
            </div>
        </div>
        </>
    );
}
