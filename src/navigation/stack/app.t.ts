import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { Profile } from '../../screens/Home/index.t';

// screens map
export type AppStackParamList = {
  home: undefined;
  profile: { profile: Profile };
};

// home screen type
type HomeScreenRouteProp = RouteProp<AppStackParamList, 'home'>;

type HomeScreenNavigationProp = StackNavigationProp<AppStackParamList, 'home'>;

export interface HomeStackScreenProps {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

// profile screen type
type ProfileScreenRouteProp = RouteProp<AppStackParamList, 'profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'profile'
>;

export interface ProfileStackScreenProps {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
}

// app
export type AppStackProps = StackNavigationProp<AppStackParamList, 'home'>;
