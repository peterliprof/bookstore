import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'react-native-paper';

interface SettingSwitchProps {
    value: boolean
    settingMethod: () => void;
}

const SettingSwitch = (props: SettingSwitchProps) => {
    return (
        <View style={styles.container}>
            <Switch value={props.value} onValueChange={props.settingMethod} color="red" />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {

    },
});

export default SettingSwitch;

