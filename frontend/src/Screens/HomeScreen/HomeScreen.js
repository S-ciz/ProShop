import React from 'react'

import "./homepage.css"

import products from "../../products"
import Product from "../../Component/Product/Product"

const HomeScreen = () => {
  return (
   <>
   <h1 className='page_title'>LATEST PRODUCTS</h1>

    <section className='products'>
     {products.map((product)=> 
    (
        <Product product={product}/>
    ))}
    </section>
   
   </>
  )
}

export default HomeScreen