import React, { Component } from 'react'
import { MenuItem } from '../../components/menu-item/MenuItem.component';

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
        },
        {
          'id':2,
          'imgUrl':'/_images/jackets.jpg',
          'title':'Jackets',
          'size':'',
        },
        {
          'id':3,
          'imgUrl':'/_images/sneakers.jpeg',
          'title':'Sneakers',
          'size':'',
        },
        {
          'id':4,
          'imgUrl':'/_images/men.jpeg',
          'title':'Men',
          'size':'large',
        },
        {
          'id':5,
          'imgUrl':'/_images/women.jpeg',
          'title':'Women',
          'size':'large',
        },
      ],
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, imgUrl, title, size}) =>{
            return <MenuItem key={id} imgUrl={imgUrl} title={title} size={size} ></MenuItem>
          })
        }
      </div>
    )
  }
}

export default Directory
