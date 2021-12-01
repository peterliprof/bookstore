import React, { useEffect, useMemo, useCallback } from 'react';
import { PreferencesContext } from '../../app/PreferencesContext';
import { View, StyleSheet, } from 'react-native';
import { Tile } from 'react-native-elements/dist/tile/Tile';
import { List } from 'react-native-paper';
import { Text } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BookSelected } from '../../app/types';
import { color } from 'react-native-elements/dist/helpers';
import { ThemeProvider, withTheme } from 'react-native-elements';



import merge from 'deepmerge';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,

} from 'react-native-paper';

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';


const Book = (book: BookSelected) => {

    const [expanded, setExpanded] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section title="Books" >
            <List.Accordion
                title={book.title}
                left={props => <List.Icon {...props} icon="book" />}
                expanded={expanded}
                onPress={handlePress} >
                < ThemeProvider >
                    <List.Item title={book.author} left={props => <List.Icon {...props} icon="account" />} />
                    <List.Item title={book.price} left={props => <List.Icon {...props} icon="currency-usd" />} />
                    <List.Item title={book.count} left={props => <List.Icon {...props} icon="book-multiple" />} />
                    <List.Item title={book.price * book.count} left={props => <List.Icon {...props} icon="credit-card-outline" />} />
                </ThemeProvider>
            </List.Accordion>
        </List.Section >
    );
};


export default Book;

