// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="/user">home</a>
      <a href="/user#features">features</a>
      <a href="/user/product">products</a>
      <a href="/user/categories">categories</a>
      <a href="/user/review">review</a>
      <a href="/user/#blogs">blogs</a>
      <a href="/user/order">Order Status</a>
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
