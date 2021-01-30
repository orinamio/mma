import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AppStack from './src/navigation/stack/app';

const appNavigationRouteNames = {
  AUTH: 'auth',
  APP: 'app',
};

const mainAppStackMap = {
  [appNavigationRouteNames.APP]: AppStack,
};

const App: React.FunctionComponent<NavigationContainerProps> = () => {
  const [initialRouteName] = React.useState(appNavigationRouteNames.APP);
  const RootStack = mainAppStackMap[initialRouteName];

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
