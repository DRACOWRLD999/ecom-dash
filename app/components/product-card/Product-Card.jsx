
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import DropBtn from '../drop-btn/Drop-Btn';

export default function ProductCard({product}) {
  return (
    <div className='flex flex-col w-40'>
    <Card shadow="sm" isPressable >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={product.title}
              className="w-full object-cover h-[140px]"
              src={product.img}
            />
          </CardBody>
          <CardFooter className="text-small grid grid-cols-1 gap-1">
                <b>{product.title}</b>
                <p className="text-default-500">{product.price}</p>
          </CardFooter>
        </Card>
        <div className=' flex items-center justify-center pt-1'>
        <DropBtn/>
        </div>
    </div>
  )
}
