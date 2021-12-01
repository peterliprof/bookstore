import React, { useState, useEffect } from 'react';

import Book from './Book';
import { bookData, searchBooks } from '../store/bookData';


import {
    View,
    SafeAreaView,
    FlatList,
    StyleSheet,
} from 'react-native';


import {
    Searchbar
} from 'react-native-paper';



import { BookData } from '../../app/types';


const Books = () => {

    const [search, setSearch] = useState('');


    const [selectedBookData, setSelectedBookData] = useState<BookData[]>(bookData);


    const handleSearch = (query: string) => {

        if (query) {
            setSearch(query);
            setSelectedBookData(searchBooks(query));

        } else {
            setSearch('');
            setSelectedBookData(bookData);

        }
    };


    return (
        <SafeAreaView>
            <View>
                <Searchbar
                    style={styles.textInputStyle}
                    onChange={(event) => handleSearch(event.nativeEvent.text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Books"
                />
            </View>
            <FlatList keyExtractor={item => item.id} data={selectedBookData} renderItem={({ item }) => <Book {...item} />} />
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({

    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
});

export default Books;