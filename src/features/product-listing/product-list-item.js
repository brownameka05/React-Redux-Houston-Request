import React, {Component} from 'react'
import {connect} from 'react-redux'


class ProductListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      cart : []
    }
  }

handleAddToCart = (product) => {
  this.props.addToCart(product)
  console.log(product)
  console.log(this.state.cart)
  this.setState({
    cart: [...this.state.cart,
      this.state.cart.push(product)]
  })
  console.log(this.state.cart)
}

  render(){
  return (
    <div className='product-list-item'>
      <img
      height={250}
      title={ this.props.product.name }
      src={`/products/${this.props.product.image}`} alt=""
      />
      <h3>{ this.props.product.name } </h3>
      <div>{this.props.product.description }</div>
      <div>${ this.props.product.price }</div>
      <div>
        <button
         onClick ={() => this.handleAddToCart(this.props.product)}
        >Add to cart </button>
      </div>
  </div>
  )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD',payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE',payload: item })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListItem)
