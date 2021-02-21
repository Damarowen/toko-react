

import React from 'react'

//*route 
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {
        firestore,
        getDataFromFirestore,
} from '../../firebase/Firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import Spinner from '../../components/Spinner/Spinner'

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview'
import CollectionsPage from '../collections/collections.component'


const SpinnerCollectionOverview = Spinner(CollectionOverview)
const SpinnerCollectionPage = Spinner(CollectionsPage)



//* match, location, history from react router dom
class ShopPage extends React.Component {

        state = {
                loading: true
        };

        unsubscribeFromSnapshot = null;

        componentDidMount() {
                const { updateCollections } = this.props
                const collectionRef = firestore.collection('koleksi');

                //* use this to get data from koleksi firebase
                //*get() return promise so after that use then
                collectionRef.get().then(snapshot => {
                        const collectionsMap = getDataFromFirestore(snapshot);
                        updateCollections(collectionsMap);
                        this.setState({ loading: false });
                });
        }

        render() {
                const { match } = this.props
                const { loading } = this.state
                return (
                        <div className='shop-page' >
                                <Route exact path={`${match.path}`} >
                                        {
                                                loading ? <SpinnerCollectionOverview isLoading={loading} /> : <CollectionOverview />
                                        }
                                </Route>
                                <Route path={`${match.path}/:idCollections`} render={props => (
                                        <SpinnerCollectionPage isLoading={loading} {...props} />
                                )}
                                />
                        </div>

                )
        }
}

const mapDispatchToProps = dispatch => ({
        updateCollections: collectionsMap =>
                dispatch(updateCollections(collectionsMap))
});

export default connect(
        null,
        mapDispatchToProps
)(ShopPage);

