import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
  let response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
  });

  if (response.ok) console.log("Purchase is Completed Thanks!")
    // User clicked submit
  }

  render() {
    return (
      <div className="checkout">
        <p>Feel free to donate what you can give Thanks hava good day   </p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);

// check out try pay pal
