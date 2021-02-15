

import React from 'react'

import PreviewCollection from '../../components/CollectionPreview/collection-preview.component';

//*reselect library
import { createStructuredSelector } from 'reselect'

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

import { selectShopKoleksi } from '../../redux/shop/shop.selector'


const ShopPage = ({koleksi}) => {
  
        return <div className='shop-page'>
            {
                koleksi.map(({ id, ...copyCollection }) => (
                    <PreviewCollection key={id} {...copyCollection} />
                ))
            }
        </div>
    
}

const mapStateToProps = createStructuredSelector({
    koleksi: selectShopKoleksi
})

export default connect(mapStateToProps)(ShopPage);



