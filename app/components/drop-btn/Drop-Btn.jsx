import React from 'react'
import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button, Popover, PopoverContent} from "@nextui-org/react";
import { DeleteIcon } from './Delete';
import { EditIcon } from './Edit';
export default function DropBtn({id}) {
    const cn = require('classnames');
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  return (
    
    <Dropdown backdrop="blur" className='flex flex-col justify-between  items-center w-40 text-center'>
    <DropdownTrigger>
      <Button 
        variant="flat" fullWidth='true' size='md' className=''
      >
        ...
      </Button>
    </DropdownTrigger>
    <DropdownMenu variant="faded" className='flex justify-between m-1 px-2'>
    <DropdownItem
        href={`/edit-product/${id}`}
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
          startContent={<DeleteIcon className={cn(iconClasses, "text-danger")} />}
          onClick={() => {
            if (confirm('Are you sure you want to delete this product?')) {
              fetch(`https://fakestoreapi.com/products/${id}`, {
                method: 'DELETE'
              }).then(() => {
                alert('Product deleted successfully!');
                window.location.reload();
              }).catch(() => {
                alert('An error occurred while deleting the product.');
              });
            }
          }}
          >
          Delete Product
        </DropdownItem>
    </DropdownMenu>
  </Dropdown>
  )
}
