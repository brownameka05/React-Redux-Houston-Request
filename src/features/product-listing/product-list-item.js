import React from 'react'

export default function ProductListItem(props){
  return <div className="product-list-item">
    <img height={250} title={ props.product.name } src={`/products/${props.product.image}`}/>
    <h3>{ props.product.name } </h3>
    <div>{props.product.description }</div>
    <div>${ props.product.price }</div>
    <div>
      <button> Add to cart </button>
    </div>
  </div>
}
