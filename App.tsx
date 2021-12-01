
import React, { useEffect, useMemo, useCallback } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { useSelector } from 'react-redux';

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';


import {

  DefaultTheme as PaperDefaultTheme,

} from 'react-native-paper';

import merge from 'deepmerge';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { PreferencesContext } from './src/app/PreferencesContext';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { LogBox } from 'react-native';
import {
  Provider as PaperProvider,
} from 'react-native-paper';


import Books from './src/features/book/Books';
import Shop from './src/features/shop/Shop';
import Settings from './src/features/setting/Settings';


import { selectShoppingcartNum } from './src/features/store/bookSlice';
import withBadge from './src/app/WithBadage';


const App = () => {

  const [isLeftHand, setLeftHand] = React.useState(false);
  const shoppingcartNum = useSelector(selectShoppingcartNum);

  const CombinedDefaultTheme = useMemo(() => {
    return merge(PaperDefaultTheme, NavigationDefaultTheme);
  }, [PaperDefaultTheme, NavigationDefaultTheme]);

  const options = useMemo(() => {
    return {
      top: 0,
      right: 0,
      left: 20,
      bottom: 0,
      hidden: shoppingcartNum < 1 ? true : false,
    };
  }, [shoppingcartNum]);


  let theme = CombinedDefaultTheme;


  useEffect(() => {
    const init = async () => {

    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });

    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);


  }, []);


  const toggleLeftHand = useCallback(() => {
    setLeftHand(!isLeftHand);
    console.log(isLeftHand);
  }, [isLeftHand]);

  const preferences = useMemo(
    () => ({
      toggleLeftHand,
      isLeftHand,
    }),
    [toggleLeftHand, isLeftHand],
  );


  const Tab = createMaterialBottomTabNavigator();


  const ShoppingcarIcon = useMemo(() => {
    return () => <Icon name='shopping-cart' size={24} />;
  }, []);



  const BadgeIcon = useMemo(() => {
    return withBadge(shoppingcartNum, options)(ShoppingcarIcon);
  }, [shoppingcartNum]);


  return (

    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Books" component={Books} options={{
              tabBarIcon: () => <Icon name='library-books' size={24} />
            }} />
            <Tab.Screen name="Shop" component={Shop} options={{
              tabBarIcon: () => <BadgeIcon />
            }} />
            <Tab.Screen name="Setting" component={Settings} options={{
              tabBarIcon: () => <Icon name='settings' size={24} />
            }} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider >
  );


}

export default App;
