import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const listItemPropTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
};

const ListItem = props => {
  return (
    <li className='list_item'>{props.item.text}</li>
  );
};

ListItem.propTypes = listItemPropTypes;
export default ListItem;
