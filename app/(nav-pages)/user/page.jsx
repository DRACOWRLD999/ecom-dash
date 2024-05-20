import React from 'react'
async function getUsers(){
  const data =await fetch('https://fakestoreapi.com/users')
  const users = await data.json()
  console.log(users)
  return users
}
export default function Page() {
let users = getUsers()
  return (
    <div>
    </div>
  )
}
