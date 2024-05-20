'use client'
import React, { useEffect, useState } from 'react';
import { Input, Image, Textarea, Button, Skeleton } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

// Fetch product details by ID
async function getProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        next: { revalidate: 3600 }
    });
    const product = await response.json();
    return product;
}

// The page component to display and update product details
export default function Page({ params }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    let [loaded, setLoaded] = useState(false);
    const router = useRouter();
    useEffect(() => {
        getProduct(params.id).then((res) => {
            setTitle(res.title);
            setPrice(res.price);
            setDescription(res.description);
            setImage(res.image);
            setCategory(res.category);
            setLoaded(true);
        });
    }, [params.id]);

    async function updateProduct(e) {
        const updatedProduct = { title, price, description,category };
        
        e.preventDefault();
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            });

            if (response.ok) {
                const data = await response.json();
                alert(`Product updated successfully! \nResponse from server: ${JSON.stringify(data)}`);
                router.push(`/product/${params.id}`)

            } else {
                const errorData = await response.json();
                alert(`Failed to update product: ${errorData.message}`);
            }
        } catch (error) {
            alert('An error occurred while updating the product.');
        }
    }

    return (
        <>
        <h1 className='text-center text-2xl font-bold my-5'>Edit Product</h1>
        <div className='flex flex-row gap-x-10 justify-center my-5 items-center '>

            <Skeleton isLoaded={loaded} height={300} width={300} className='rounded-xl h-[430px] flex items-center justify-center'>
            <Image src={image} alt={title} width={300} height={300}  />
            </Skeleton>
            <form onSubmit={updateProduct} className='flex flex-col gap-4 w-96'>
                <Input
                    label="Title"
                    variant='bordered'
                    placeholder="Product title"
                    labelPlacement='outside'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    labelPlacement='outside'
                    variant='bordered'
                    label="Price"
                    placeholder="Product price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    
                />
                <Textarea
                    labelPlacement='outside'
                    variant='bordered'
                    label="Description"
                    placeholder="Product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Textarea
                    labelPlacement='outside'
                    variant='bordered'
                    label="category"
                    placeholder="Product category"
                    value={category}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Button type="submit" size='md'>Update Product</Button>
            </form>
        </div>
        </>
    );
}
