import MenuItem from '../../components/menu-item/MenuItem.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 
import { selectDirectorySections } from '../../redux/directory/Directory.selectors';
import './Directory.style.scss';


const Directory = ({sections}) => (
  <div className='directory-menu'>
    {
      sections.map(({ id, ...otherSectionItem }) => {
        return <MenuItem key={id} {...otherSectionItem}></MenuItem>
      })
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
