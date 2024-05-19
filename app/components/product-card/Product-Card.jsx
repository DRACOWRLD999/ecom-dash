
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import DropBtn from '../drop-btn/Drop-Btn';

export default function ProductCard(product) {
  return (
    <main className='flex flex-col w-60 h-92 m-6'>
    <Card shadow="sm" isPressable >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width={400}
              height={400}
              className="w-full object-fill object-top h-[240px]"
              loading='lazy'
            
              alt={product.title}
              src={product.img}
            />
          </CardBody>
          <CardFooter className="text-small grid grid-cols-1 gap-1">
                <b className='h-16 line-clamp-3'>{product.title}</b>
                <div className="text-default-500">$ {product.price}</div>
          </CardFooter>
        </Card>
        <div className=' flex items-center justify-center pt-1'>
        <DropBtn id={product.id}/>
        </div>
    </main>
  )
}
