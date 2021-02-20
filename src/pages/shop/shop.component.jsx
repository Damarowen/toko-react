

import React from 'react'

//*route 
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'

import CollectionsPage from '../collections/collections.component'

import {
        firestore,
        getDataFromFirestore,
} from '../../firebase/Firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';


//* match, location, history from react router dom
class ShopPage extends React.Component {
        unsubscribeFromSnapshot = null;

        componentDidMount() {
                const { updateCollections } = this.props
                const collectionRef = firestore.collection('koleksi');

                //* use this to get data from koleksi firebase
                this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
                 const collectionsMap = getDataFromFirestore(snapshot)
                 updateCollections(collectionsMap);

                })
        }

        render() {
                const { match } = this.props
                return (
                        <div className='shop-page' >
                                <Route exact path={`${match.path}`} component={CollectionOverview} />
                                <Route path={`${match.path}/:idCollections`} component={CollectionsPage} />
                        </div>

                )
        }
}

const mapDispatchToProps = (dispatch) => ({
        updateCollections: (collectionsMap) =>
          dispatch(updateCollections(collectionsMap)),
      });
      
      
export default connect(null, mapDispatchToProps)(ShopPage);



