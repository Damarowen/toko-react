// import SHOP_DATA from '../../data/shop.data'

import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
  // koleksi: SHOP_DATA
  koleksi: null
}

const shopReducer = ( state = INITIAL_STATE, action) => {
    switch (action.type){
      case ShopActionTypes.UPDATE_COLLECTIONS:
        return{
          ...state,
          koleksi: action.payload
        }
        default:
        return state;
    }
}

export default shopReducer