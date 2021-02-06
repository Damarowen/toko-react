import React from 'react'
import MenuItem from '../MenuItem/menu-item-component'

import './directory.styles.scss'

class Directory extends React.Component {

    constructor() {
        super();

        this.state = {
            kategori: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    //* size below is for larger display
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    //* size below is for larger display
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }


    render() {
        return (
            <div className='directory-menu'>
                {this.state.kategori.map((
                    //*copy kategori adalah sisa object di kategori
                    { id, ...copyKatergori} ) => <MenuItem key={id} {...copyKatergori} />  )} 
                    
            </div>
        )
    }



}

export default Directory;
