import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface SettingProps {
    icons: React.ReactNode;
    setting: React.ReactNode;
}

const SettingRow = (props: SettingProps) => {

    return (
        <View style={styles.container}>
            <View>{props.icons}</View>
            <View>{props.setting}</View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        // direction: "rtl",
        justifyContent: "space-between"
    },
});


export default SettingRow;