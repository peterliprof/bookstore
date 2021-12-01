import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface IconsProps {
    fistIcon: Element;
    secondIcon: Element;
}

const SettingIcons = (props: IconsProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>{props.fistIcon}</View>
            <View>{props.secondIcon}</View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        padding: 10,

    },

    icon: {
        marginRight: 10,

    }
});

export default SettingIcons;