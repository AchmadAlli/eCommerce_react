import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from  '../Menu-item/menu-item.component';

import './directory.styles.scss';

const  Directory = ({sections}) => {
  return(
    <div className="directory-menu">
      {sections.map(({id, ...otherAttribute}) => <MenuItem key={id} {...otherAttribute}  />)}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections 
});

export default connect(mapStateToProps)(Directory);