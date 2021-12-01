import { PayloadAction } from '@reduxjs/toolkit';
import { BookStoreState } from './bookSlice';

import { BookData, BookSelected } from '../../app/types';

import { bookData } from './bookData';


export const addBookToCart = (state: BookStoreState, action: PayloadAction<string>): BookStoreState => {

    let added = false;

    let shoppingcart = state.shoppingcart;

    shoppingcart.forEach((cart) => {
        if (cart.id === action.payload) {
            cart.count = cart.count + 1;
            added = true;
        }
    })

    if (!added) {
        shoppingcart.push({ id: action.payload, count: 1 });
    }

    state.shoppingcartNum += 1;

    return state;

}

export const getNumPurchsed = (state: BookStoreState, id: string): number => {

    let numPurchsed = 0;

    state.shoppingcart.forEach((cart) => {
        if (cart.id == id) {
            numPurchsed = cart.count;
        }
    });

    return numPurchsed;
}


const getBook = (id: string): BookData | undefined => {
    let books = bookData;
    let book;
    books.forEach((b) => {
        if (b.id === id) {
            book = b;
        }
    });

    return book;

}
export const getBooksSelected = (state: BookStoreState): Array<BookSelected> => {
    let booksSelected = new Array<BookSelected>();

    state.shoppingcart.forEach((cart) => {
        let id = cart.id;
        let book = getBook(id);

        if (book !== undefined) {
            booksSelected.push({ ...book, count: cart.count });
        }

    });


    return booksSelected;
}
