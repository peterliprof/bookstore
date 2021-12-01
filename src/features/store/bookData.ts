import { BookData } from "../../app/types";

export const bookData: BookData[] =
    [
        { id: '1', title: 'React and React Native', author: 'Adam Boduch and Roy Derks', date: 'Apr 30 2020', publisher: 'Paperback', price: 79.08, cover: 'ReactAndReactNative' },
        { id: '2', title: 'JavaScript: Programming Basics', author: 'Nathan Clark', date: 'Aug 13 2017', publisher: 'Kindle Edition', price: 20.08, cover: 'javascripBasic' },
        { id: '3', title: 'React Projects', author: 'Roy Derks', date: 'Dec 20 2019', publisher: 'Kindle Edition', price: 32.99, cover: 'ReactProject' },
        { id: '4', title: 'HTML, CSS & JavaScript in easy steps', author: 'Mike McGrath', date: 'Aug 7 2020', publisher: 'Paperback', price: 32.22, cover: 'HTMLJavaScriptCSS' },
        { id: '5', title: 'Fullstack React Native', author: 'Devin Abbott, Houssein Djirdehs', date: 'Dec 20 2019', publisher: 'Paperback', price: 78.50, cover: 'FullStactReact' },
        { id: '6', title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', date: 'Jun 9 2020', publisher: 'Paperback', price: 71.36, cover: 'JavaScriptDefinitiveGuide' },
        { id: '7', title: 'HTML and CSS QuickStart Guide', author: 'David DuRocher', date: 'Jan 22 2021', publisher: 'Paperback', price: 33.90, cover: 'HTMLCSSQuick' },

    ];

export const images = {
    books: {
        ReactAndReactNative: require('../../assets/img/ReactAndReactNative.jpg'),
        javascripBasic: require('../../assets/img/javascripBasic.jpg'),
        ReactProject: require('../../assets/img/ReactProject.jpg'),
        HTMLJavaScriptCSS: require('../../assets/img/HTMLJavaScriptCSS.jpg'),
        FullStactReact: require('../../assets/img/FullStactReact.jpg'),
        JavaScriptDefinitiveGuide: require('../../assets/img/JavaScriptDefinitiveGuide.jpg'),
        HTMLCSSQuick: require('../../assets/img/HTMLCSSQuick.jpg'),
    }
}

export const searchBooks = (query: string): BookData[] => {

    let bookDataResults = bookData.filter((item) => {

        const searchStr = query ? query.toUpperCase() : ''.toUpperCase;
        const bookTitle = item.title.toUpperCase();
        return bookTitle.indexOf(searchStr as string) > -1;
    });

    return bookDataResults;
}