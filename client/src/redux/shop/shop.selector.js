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
//* fro collection component

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopKoleksi],
    //*use [] when the name of the property is dynamically determined 
    collections => collections ? collections[collectionUrlParam] : null
)


//* for collection overview
export const selectCollectionsForPreview = createSelector(
    [selectShopKoleksi],
    collections => collections ? Object.keys(collections).map(val => collections[val]) : []
  );
