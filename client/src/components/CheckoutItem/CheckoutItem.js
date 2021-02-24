import './CheckoutItem.styles.scss'

import { connect } from 'react-redux';

import { removeItem, removeSingleItem, addItem } from '../../redux/cart/cart.actions'


const CheckoutItem = ({ barang, tambahBarang, hapusBarang, hapusSatuBarang }) => {
  const { name, imageUrl, price, quantity } = barang;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => hapusSatuBarang(barang)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => tambahBarang(barang)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => hapusBarang(barang)}>&#10005;</div>
    </div>
  )

};

const mapDispatchToProps = dispatch => ({
  hapusBarang: item => dispatch(removeItem(item)),
  tambahBarang: item => dispatch(addItem(item)),
  hapusSatuBarang: item => dispatch(removeSingleItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);