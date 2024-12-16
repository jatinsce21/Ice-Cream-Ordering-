// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="/vendor-home">Home</a>
      <a href="/vendor-home/add-product">AddProduct</a>
      <a href="/vendor-home/#products">products</a>
      <a href="/vendor-home/manage-order-status">Manage Order Status</a>
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
