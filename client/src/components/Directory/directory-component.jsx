import React from 'react'
import MenuItem from '../MenuItem/menu-item-component'

//*reselect library
import { createStructuredSelector } from 'reselect'

//*The connect() function connects a React component to a Redux store.
import { connect } from 'react-redux';

import { selectDirectoryKategori } from '../../redux/directory/directory.selector'


import './directory.styles.scss'

const Directory = ({ kategori }) => (

    <div className='directory-menu'>
        {kategori.map((
            //*copy kategori adalah sisa object di kategori
            { id, ...copyKatergori }) => <MenuItem key={id} {...copyKatergori} />)}

    </div>

)

const mapStateToProps = createStructuredSelector({
    kategori: selectDirectoryKategori
})

export default connect(mapStateToProps)(Directory);
