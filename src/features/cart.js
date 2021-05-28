import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'carts',
  initialState: {
    cart : []
  },
  reducers: {
    selectCart: (state, action) => {
      //state.cart= action.payload;
      state.cart.push([...state.cart,action.payload])
    }
  },
});

export const {
  selectCart
} = cartSlice.actions;

//  const selectOpenCart = (state) => state.cart.cart;

//  console.log(selectOpenCart)


export default cartSlice.reducer;
