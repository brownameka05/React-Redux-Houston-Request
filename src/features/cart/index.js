import React, { Component } from 'react'
import { connect } from 'react-redux'

// {
//   this.props.cart.map(item => <div>
//   <p>{item.name}</p>
//   <p>{item.quantity}</p>
//   <button onClick={(e) => this.props.removeFromCart(item)}
//   >Remove </button>
//
// </div>)
// }

class Cart extends Component {


  render() {
    return (
      <div>
        <p> item: HOUSTON GEAR </p>
        <p> quantity  1 </p>
        <p> Cost $ 19.99 </p>
        <button> CHECKOUT </button>

      </div>
      )
    }
}

const mapStateToProps = function(state) {
  return {
    cart: state.cart
  }
}
//
const mapDispatchToProps = function(dispatch){
  return {
    removeFromCart: (item)=> {
      dispatch({ type: 'REMOVE',payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
