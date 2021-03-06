import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <p>{name.toUpperCase()}</p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
