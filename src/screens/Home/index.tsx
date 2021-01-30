import * as React from 'react';
import { View } from 'react-native';

import AvatarItem from './components/AvatarItem';
import ProfileInfoItem from '../../components/ProfileInfoItem';
import ProfileViewer from '../../components/ProfileViewer';

import { RenderProfileItemProps } from './index.t';
import { HomeStackScreenProps } from '../../navigation/stack/app.t';
import profileDataJson from '../../utils/data_mocks/profile_details.json';
import { Profile } from './index.t';
import styles from './style';
import { sortArrayByKey } from '../../utils/misc';

const STARTING_PROFILE_INDEX = 0;

// data
const SORTED_PROFILE_DATA = sortArrayByKey<Profile, string>(
  profileDataJson,
  'fullName'
);

const HomeScreen: React.FunctionComponent<HomeStackScreenProps> = ({
  navigation,
}) => {
  const [
    currentProfileIndexState,
    setCurrentProfileIndexState,
  ] = React.useState(STARTING_PROFILE_INDEX); // starting from the first item

  // callback handlers
  const onAvatarPress = React.useCallback((index: number) => {
    setCurrentProfileIndexState(index);
  }, []);

  const onAvatarLongPress = React.useCallback(
    (index: number, profile: Profile) => {
      navigation.navigate('profile', {
        profile,
      });
      setCurrentProfileIndexState(index);
    },
    [navigation]
  );

  // render views items
  const renderAvatarItem = React.useCallback(
    ({ item, index }: RenderProfileItemProps) => {
      return (
        <AvatarItem
          {...{
            profile: item,
            index,
            currentProfileIndex: currentProfileIndexState,
            onAvatarPress,
            onAvatarLongPress,
          }}
        />
      );
    },
    [currentProfileIndexState, onAvatarPress, onAvatarLongPress]
  );

  const renderProfileInfoItem = React.useCallback(
    ({ item, index }: RenderProfileItemProps) => {
      return (
        <View style={styles.profileInfoContainer}>
          <ProfileInfoItem {...{ profile: item, index }} />
        </View>
      );
    },
    []
  );

  // render
  return (
    <View>
      <ProfileViewer
        data={SORTED_PROFILE_DATA}
        activeIndex={currentProfileIndexState}
        setActiveIndex={setCurrentProfileIndexState}
        renderAvatarItem={renderAvatarItem}
        renderProfileInfoItem={renderProfileInfoItem}
      />
    </View>
  );
};

export default HomeScreen;
