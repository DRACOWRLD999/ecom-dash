
import React from 'react'
import {Card, Skeleton} from "@nextui-org/react";
import DropBtn from '../drop-btn/Drop-Btn';

export default function CardSkeleton(product) {
  return (
    <main className='flex flex-col w-60  h-[400px] m-6'>
    <Card className="space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="w-full object-fill object-top h-[240px] bg-default-300"></div>
      </Skeleton>
      <div className="flex flex-col justify-center items-center space-y-3">
      <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 rounded-lg bg-default-200 "></div>
        </Skeleton>        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-4 rounded-lg bg-default-200 "></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">  
          <div className="h-3  rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
    <div className=' flex items-center justify-center pt-1'>
        <DropBtn/>
    </div>
    </main>
  )
}
