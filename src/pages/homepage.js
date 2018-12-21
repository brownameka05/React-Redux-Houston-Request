import React from 'react'
import ProductListing from '../features/product-listing'
import data from '../data/products.json'
import HouReq from './HouReq.png'

export default function Homepage(props){
  return <div className="home">
  <img src={HouReq} height="200"/>
  <h1> Welcome To Houston Request </h1>
  <ProductListing products={data.products} />
  </div>
}
