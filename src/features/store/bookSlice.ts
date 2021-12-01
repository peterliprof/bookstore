import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ShoppingCartState } from '../../app/types';

import { addBookToCart, getNumPurchsed, getBooksSelected } from './bookStoreAPI';

export interface BookStoreState {
    shoppingcart: Array<ShoppingCartState>;
    shoppingcartNum: number;
}

const initialState: BookStoreState = {
    shoppingcart: new Array<ShoppingCartState>(),
    shoppingcartNum: 0,
}

export const bookSlice = createSlice({

    name: 'book',
    initialState,
    reducers: {

        buyBook: (state, action: PayloadAction<string>) => {

            return addBookToCart(state, action);

        },

    }

});

export const { buyBook } = bookSlice.actions;

export const selectNumPurchsedItems = (state: RootState, id: string) => getNumPurchsed(state.book, id);
export const selectBookState = (state: RootState) => state.book;
export const selectShoppingcartNum = (state: RootState) => state.book.shoppingcartNum;
export const selectShoppingCart = (state: RootState) => state.book.shoppingcart;
export const selectBooksSelected = (state: RootState) => getBooksSelected(state.book);


export default bookSlice.reducer;