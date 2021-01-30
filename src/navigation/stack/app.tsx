import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';

import { APP_HEADER_HEIGHT } from '../../constants/navigation';
import { AppStackProps, AppStackParamList } from './app.t';

// initialize stack navigator
const Stack = createStackNavigator<AppStackParamList>();

const AppStack: React.FunctionComponent<AppStackProps> = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Contacts',
          headerStyle: {
            height: APP_HEADER_HEIGHT,
          },
        }}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={({ route }) => ({
          title: `${route.params?.profile?.fullName.split(' ')[0]}'s Profile`,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
