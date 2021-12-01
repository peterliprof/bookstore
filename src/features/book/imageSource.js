
import { images } from '../store/bookData';


const imageSource = (src) => {


    const imageArray = {
        'ReactAndReactNative': images.books.ReactAndReactNative,
        'javascripBasic': images.books.javascripBasic,
        'ReactProject': images.books.ReactProject,
        'HTMLJavaScriptCSS': images.books.HTMLJavaScriptCSS,
        'FullStactReact': images.books.FullStactReact,
        'JavaScriptDefinitiveGuide': images.books.JavaScriptDefinitiveGuide,
        'HTMLCSSQuick': images.books.HTMLCSSQuick
    };

    return imageArray[src];
}


export default imageSource;