import './collections.styles.scss'

import CollectionItem  from '../../components/CollectionItem/collection-item.component'

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector'

const CollectionsPage = ({ tai }) => {
    //*title items from shop data
const { title, items } = tai
    return (
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map( barang => <CollectionItem key={barang.id} item={barang}/> )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
                          //* refer to item in shop selector
    tai: selectCollection(ownProps.match.params.idCollections)(state)
})


export default connect(mapStateToProps)(CollectionsPage)