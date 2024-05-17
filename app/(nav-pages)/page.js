import React from "react";
import { getProducts } from '../utls/utils.js'
import Products from "../components/products-cards/Product-Cards.jsx";
export default function Home() {
  return (
    <main className=" mt-10 m-10">
      <Products/>
    </main>
  );
}
