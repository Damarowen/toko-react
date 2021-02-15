

import React from 'react'

//*route 
import { Route } from 'react-router-dom'

import CollectionOverview  from '../../components/CollectionOverview/CollectionOverview'

import CategoryPage from './category/category.component'

//* match, location, history from react router dom
const ShopPage = ({match}) => (
  
        <div className='shop-page'>
           <Route exact path={`${match.path}`} component={CollectionOverview} />
       <Route path = {`${match.path}/:idCategory`} component={CategoryPage}/>
        </div>
    
)


export default ShopPage;



