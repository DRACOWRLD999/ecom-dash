'use client'
import React from 'react'
import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { DeletetIcon } from './Delete';
import { EditIcon } from './Edit';
export default function DropBtn() {
    const cn = require('classnames');
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    
    <Dropdown backdrop="blur" className='flex flex-col justify-between h-20 items-center w-40 text-center'>
    <DropdownTrigger>
      <Button 
        variant="flat" fullWidth='true' size='md' className=''
      >
        ...
      </Button>
    </DropdownTrigger>
    <DropdownMenu variant="faded" className='flex justify-between m-1 px-2'>
    <DropdownItem
        className='pt-1 hover:bg-primary-100 pb-2'
          key="edit"
          startContent={<EditIcon className={iconClasses} />}
        >
          Edit Product
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger pt-2 pb-1 hover:bg-primary-100"
          color="danger"
          startContent={<DeletetIcon className={cn(iconClasses, "text-danger")} />}     >
          Delete Product
        </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}
