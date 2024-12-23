import React from 'react'
import "./product.css"

import { Link } from 'react-router-dom'
import products from '../../products'

// Components

import Rating from '../../Component/Rating/Rating'

const ProductScreen = () => { 

  let id = window.location.pathname.split('/')[2];
  let product = products.find((p)=> p._id === id)


  return (
    <div style={{marginTop: "1rem"}}>
      <span className='product_return'> 
      <Link to={"/"}><i className='fa fa-arrow-left'/>  BACK </Link>
      </span>
  
     <div  className='product_screen'>
      <section className='img'>
        <img src={product.image} alt={product._id}/>
       </section>
      <section className='content'> 
          <h1> {product.name} </h1>
          <Rating rate={product.rating} text={product.numReviews + " reviews"}/>
          <h2>Price: ${product.price} </h2>
          <p>{product.description} </p>
      </section>
      <section className='submit_cart'> 
           
          <li>
            <span>Price: </span>
            <span> ${product.price} </span>
          </li>
          <li>
            <span>Status: </span>
            <span> {product.countInStock > 0 ? "In Stock": "Out of stock"} </span>
          </li>
          <li> 
            <button className={ product.countInStock > 0 ? "active": "inactive"} disabled={product.countInStock === 0} >ADD TO CART </button>
          </li>

      </section>
     </div>
    </div>
    
  )
}

export default ProductScreen