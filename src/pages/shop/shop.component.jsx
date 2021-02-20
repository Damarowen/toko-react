

import React from 'react'

//*route 
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {
        firestore,
        getDataFromFirestore,
} from '../../firebase/Firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'
import CollectionsPage from '../collections/collections.component'

import Spinner from '../../components/Spinner/Spinner'

const SpinnerCollectionOverview = Spinner(CollectionOverview)
const SpinnerCollectionPage = Spinner(CollectionsPage)



//* match, location, history from react router dom
class ShopPage extends React.Component {

        state = {
                loading: true
        }

        unsubscribeFromSnapshot = null;

        componentDidMount() {
                const { updateCollections } = this.props
                const collectionRef = firestore.collection('koleksi');

                //* use this to get data from koleksi firebase
                this.unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
                        const collectionsMap = getDataFromFirestore(snapshot)
                        updateCollections(collectionsMap);
                        this.setState({ loading: false})

                })
        }

        render() {
                const { match } = this.props
                const { loading } = this.props
                return (
                        <div className='shop-page' >
                                <Route exact path={`${match.path}`}  render={props => <SpinnerCollectionOverview isLoading={loading} {...props}/>}  />
                                <Route path={`${match.path}/:idCollections`} render={props => <SpinnerCollectionPage isLoading={loading} {...props}/>} />
                        </div>

                )
        }
}

const mapDispatchToProps = (dispatch) => ({
        updateCollections: (collectionsMap) =>
                dispatch(updateCollections(collectionsMap)),
});


export default connect(null, mapDispatchToProps)(ShopPage);



