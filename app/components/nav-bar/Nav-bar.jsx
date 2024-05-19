import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from '../logo/Logo';


export default function Nav() {
  return (
    <>
        <Navbar className='flex flex-row' isBordered='true' position={'sticky'} >
            <NavbarBrand className=' flex '>
                <Logo/>
                <p className="font-bold text-inherit p-4 select-none">DASH</p>
            </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
              <Link href="/" className=' text-secondary-foreground hover:text-primary-800'>
                Home
              </Link>
          </NavbarItem>
        <NavbarItem>
          <Link href="cart"  className=' text-secondary-foreground hover:text-primary-800'>
            Carts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="user" className=' text-secondary-foreground hover:text-primary-800'>
            Users
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="sign" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
        </Navbar>
        </>
  )
}
