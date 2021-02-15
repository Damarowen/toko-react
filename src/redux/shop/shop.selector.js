import { createSelector } from 'reselect'

// const COLLECTION_ID_MAP ={
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }


//* pull put state directory
const selectShop = state => state.shop

export const selectShopKoleksi= createSelector(
    [selectShop],
    //* dari root reducer
    shop => shop.koleksi
)


//* item refer to params ( sneaker, jackets )
export const selectCollection = collectionUrlParam => createSelector(
    [selectShopKoleksi],
    collections => collections.find(q => q.routeName === collectionUrlParam)
)