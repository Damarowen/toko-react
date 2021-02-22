

import React, { useEffect, useState } from 'react'

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
const ShopPage = ({ match, updateCollections }) => {


        //* toggle button app
        const [Loading, setLoading] = useState(true)

        useEffect(() => {
                const collectionRef = firestore.collection('koleksi');

                //* use this to get data from koleksi firebase
                //*get() return promise so after that use then
                collectionRef.get().then(snapshot => {
                        const collectionsMap = getDataFromFirestore(snapshot);
                        updateCollections(collectionsMap);
                        setLoading(false);
                })
        }, [updateCollections, Loading])

        return (
                <div className='shop-page' >
                        <Route exact path={`${match.path}`} >
                                {
                                        Loading ? <SpinnerCollectionOverview isLoading={Loading} /> : <CollectionOverview />
                                }
                        </Route>
                        <Route path={`${match.path}/:idCollections`} render={props => (
                                <SpinnerCollectionPage isLoading={Loading} {...props} />
                        )}
                        />
                </div>

        )
}

const mapDispatchToProps = dispatch => ({
        updateCollections: collectionsMap =>
                dispatch(updateCollections(collectionsMap))
});

export default connect(
        null,
        mapDispatchToProps
)(ShopPage);

