import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collection.style.scss';

const Collection = () => {
  return (
    <div>
      
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  Collections: "asdsad"
});

export default connect(mapStateToProps)(Collection);