import React from 'react';

import SettingRow from './SettingRow';
import SettingSwitch from './SettingSwitch';
import SettingIcons from './SettingIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { PreferencesContext } from '../../app/PreferencesContext';

import {
    View,
} from 'react-native';


const Settings = () => {

    const leftRightIcons = <SettingIcons fistIcon={<FontAwesome name="hand-o-left" />} secondIcon={<FontAwesome name="hand-o-right" />} />;

    const { toggleLeftHand, isLeftHand } = React.useContext(PreferencesContext);

    return (
        <View>
            <SettingRow icons={leftRightIcons} setting={<SettingSwitch value={isLeftHand} settingMethod={toggleLeftHand} />} />
        </View>
    );
}


export default Settings;