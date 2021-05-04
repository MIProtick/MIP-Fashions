import React, { Component } from 'react'
import MenuItem from '../../components/menu-item/MenuItem.component';

export class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          'id':1,
          'imgUrl':'/_images/hat.jpg',
          'title':'Hats',
          'size':'',
          'link':'hats',
        },
        {
          'id':2,
          'imgUrl':'/_images/jackets.jpg',
          'title':'Jackets',
          'size':'',
          'link':'jackets',
        },
        {
          'id':3,
          'imgUrl':'/_images/sneakers.jpeg',
          'title':'Sneakers',
          'size':'',
          'link':'sneakers',
        },
        {
          'id':4,
          'imgUrl':'/_images/men.jpeg',
          'title':'Men',
          'size':'large',
          'link':'men',
        },
        {
          'id':5,
          'imgUrl':'/_images/women.jpeg',
          'title':'Women',
          'size':'large',
          'link':'women',
        },
      ],
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...otherSectionItem}) =>{
            return <MenuItem key={id} {...otherSectionItem}></MenuItem>
          })
        }
      </div>
    )
  }
}

export default Directory
