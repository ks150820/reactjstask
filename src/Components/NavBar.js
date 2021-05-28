import React from 'react';
import './NavBar.css';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const NavBar = () => {
  const getData = useSelector((state) => state.cartNu.cart);

  console.log('length ==', getData.length);
  return (
    <div className="navbar">
      <h3>Home</h3>
      <div className="badge">
        <Badge badgeContent={getData.length} color="secondary">
          <ShoppingCartIcon className="cart" />
        </Badge>
      </div>
    </div>
  );
};

export default NavBar;
