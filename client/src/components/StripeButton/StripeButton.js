import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ harga }) => {
    const stripePrice = harga * 100;
    const publicshableKey = 'pk_test_51ILRHfLUkFFNf0MFWyVrEmjHCWGf7ouiIY13HU6ZwUZqnanhbQ9uKQY7pGCHcFZ7mfpSueRMqeCE3Samsqlc6u1j00mkP3kiXn'

console.log(harga)
    //* on success
    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: stripePrice,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Damar Clothin ltd.'
            billingAddress
            shippingAddress
            image='https://seeklogo.com/images/S/stripe-logo-C409DC9652-seeklogo.com.png'
            description={`Your total is ${harga}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicshableKey}
        />
        
    )
}

export default StripeCheckoutButton