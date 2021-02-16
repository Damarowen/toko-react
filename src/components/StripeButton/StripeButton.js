

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ harga }) => {
    const stripePrice = harga * 100;
    const publicshableKey = 'pk_test_51ILRHfLUkFFNf0MFWyVrEmjHCWGf7ouiIY13HU6ZwUZqnanhbQ9uKQY7pGCHcFZ7mfpSueRMqeCE3Samsqlc6u1j00mkP3kiXn'


    //* on success
    const onToken = token => {
        console.log(token)
        alert('Payment Success')
    }


    return (
        <StripeCheckout
            label='Pay Now'
            name='Damar Clothin ltd.'
            billingAddress
            shippingAddress
            image='https://seeklogo.com/images/S/stripe-logo-C409DC9652-seeklogo.com.png'
            description={`Your total is $${harga}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publicshableKey}
        />
    )
}

export default StripeCheckoutButton