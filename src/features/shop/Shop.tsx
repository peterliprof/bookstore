import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectBooksSelected } from '../store/bookSlice';

import { StyleSheet, Text, SafeAreaView, FlatList } from "react-native";

import Book from './Book';

const Shop = () => {

    const books = useAppSelector(selectBooksSelected);


    return (
        <SafeAreaView style={styles.container}>
            {books.length <= 0 ?
                <Text style={styles.empty}>Shopping Cart is Empty</Text> :
                <FlatList keyExtractor={item => item.id} data={books} renderItem={({ item }) => <Book {...item} />} />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16
    },
    item: {
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
    },
    title: {
        fontSize: 24
    },
    empty: {
        flex: 1,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'

    }
});
export default Shop;