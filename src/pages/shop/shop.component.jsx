

import React from 'react'
import SHOP_DATA from '../../data/shop.data'

import '../../components/preview-collections/preview.component'
import PreviewCollection from '../../components/preview-collections/preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return <div className='shop-page'>
            {
                collections
                .map(({ id, ...copyCollection }) => (
                    <PreviewCollection key={id} {...copyCollection} />
                ))
            }
        </div>
    }

}

export default ShopPage;

