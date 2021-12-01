import React, { useMemo } from 'react';
import { Image } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';


import {
    Card, Button
} from 'react-native-paper';


import imageSource from './imageSource';
import { BookData } from '../../app/types';
import withBadge from '../../app/WithBadage';
import { buyBook, selectBookState } from '../store/bookSlice';
import { getNumPurchsed } from '../store/bookStoreAPI';
import { PreferencesContext } from '../../app/PreferencesContext';
import { FlexAlignType } from 'react-native';

const Book = (props: BookData) => {


    const dispatch = useDispatch();
    const bookState = useSelector(selectBookState);
    const bookNum = getNumPurchsed(bookState, props.id);

    const options =
    {
        top: 0,
        right: 0,
        left: 20,
        bottom: 0,
        hidden: bookNum < 1 ? true : false,
    };


    const CartPlusIcon = useMemo(() => {
        return () => <Button icon="cart-plus" onPress={() => handleBuy(props)}>BUY</Button>;
    }, []);


    const BadgeIcon = withBadge(bookNum, options)(CartPlusIcon);


    const handleBuy = (book: BookData) => {
        dispatch(buyBook(book.id));
    }

    const { isLeftHand } = React.useContext(PreferencesContext);

    const leftHand: FlexAlignType = useMemo(() => {
        return isLeftHand ? 'flex-end' : 'flex-start';
    }, [isLeftHand]);

    return (

        <Card key={props.id}>
            <Image style={{
                width: 200,
                height: 200,
                alignSelf: 'center',
                borderColor: "red",
                borderWidth: 5,
                resizeMode: 'contain'

            }} source={imageSource(props.cover)} />

            < Card.Title title={props.title} subtitle={'CAD ' + props.price} />

            <Card.Actions style={{
                alignSelf: leftHand
            }}>

                <BadgeIcon />

            </Card.Actions>
        </Card>

    );

}


export default Book;