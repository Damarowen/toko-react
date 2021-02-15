import { createSelector } from 'reselect'

//* pull put state directory
const selectShop = state => state.shop

export const selectShopKoleksi= createSelector(
    [selectShop],
    //* dari root reducer
    shop => shop.koleksi
)