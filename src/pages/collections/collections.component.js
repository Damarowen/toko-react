import './collections.styles.scss'



//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector'

const CollectionsPage = ({ tai }) => {
    console.log(1, tai)
    return (
        <div className="collection-page">
            <h2>COLLECTION PAGE</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
                          //* refer to item in shop selector
    tai: selectCollection(ownProps.match.params.idCollections)(state)
})


export default connect(mapStateToProps)(CollectionsPage)