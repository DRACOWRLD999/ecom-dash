
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import DropBtn from '../drop-btn/Drop-Btn';

export default function ProductCard(product) {
  return (
    <main className='flex flex-col w-60 h-72 m-6'>
    <Card shadow="sm" isPressable >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              height="100%"
              loading='lazy'

              alt={product.title}
              className="w-full object-cover h-[140px]"
              src={product.img}
            />
          </CardBody>
          <CardFooter className="text-small grid grid-cols-1 gap-1">
                <b className='h-16'>{product.title}</b>
                <div className="text-default-500">{product.price}</div>
          </CardFooter>
        </Card>
        <div className=' flex items-center justify-center pt-1'>
        <DropBtn/>
        </div>
    </main>
  )
}
