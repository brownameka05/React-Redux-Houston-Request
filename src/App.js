import React, { Component } from 'react';
import Router from './Router'
import { NavLink } from 'react-router-dom'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const Navigation = (props) => <nav>
<ul>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/cart'>Cart</NavLink></li>
</ul>
</nav>


// class App extends Component {
//   render (){
//     return <div className="page-container">
//       <Navigation />
//       <Router />
//     </div>
//   }
// }
//
// export default App;



class App extends Component {
  render() {
    return <div className="page-container">
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <div className="example">
        <Navigation />
        <Router />

          <h1>Donate To The Houston Request! </h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
      </div>

  }
}

export default App;
