import { Button } from '@nextui-org/button'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-4xl text-center'>Sign In</h1>
      <form className='flex flex-col justify-center'>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' />
        <Button>Sign In</Button>
      </form>
    </div>
  )
}
