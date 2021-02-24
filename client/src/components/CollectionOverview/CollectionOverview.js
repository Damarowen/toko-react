import './CollectionOverview.styles.scss'

//*reselect library
import { createStructuredSelector } from 'reselect'

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

import CollectionPreview  from '../CollectionPreview/collection-preview.component'


//*selector
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

const CollectionOverview = ({koleksi}) => {
   return <div className='collection-overview'>
            {
                koleksi.map(({ id, ...copyCollection }) => (
                    <CollectionPreview key={id} {...copyCollection} />
                ))
            }
        </div>
}

const mapStateToProps = createStructuredSelector({
    koleksi: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);