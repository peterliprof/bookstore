export interface BookData {
    id: string;
    title: string;
    author: string;
    date: string;
    publisher: string;
    price: number;
    cover: string;

};


export interface BookSelected extends BookData {
    count: number;
}

export interface ShoppingCartState {
    id: string;
    count: number;
}

