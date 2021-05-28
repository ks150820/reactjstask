import React from 'react';
import NavBar from './Components/NavBar';
import data from './Data/Local-Data.json';
import ProductItem from './Components/ProductItem';
import './HomeScreen.css';
import { selectCart } from './features/cart';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  //   const getData = useSelector((state) => state.cartNu.cart);

  //console.log("getData---->>",getData)
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar />
      <div className="imgContainer">
        {data.data.map((item, index) => (
          <ProductItem
            image={item.image}
            price={item.price}
            title={item.title}
            key={index}
          >
            <button className="btn" onClick={() => dispatch(selectCart(item))}>
              To Cart
            </button>
          </ProductItem>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
