import * as React from 'react';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ProfileInfoItem from '../../components/ProfileInfoItem';

import { ProfileStackScreenProps } from '../../navigation/stack/app.t';
import styles from './style';

const ProfileScreen: React.FunctionComponent<ProfileStackScreenProps> = ({
  route,
}) => {
  const profile = route.params?.profile;
  return (
    <ScrollView
      style={styles.rootContainer}
      contentContainerStyle={styles.rootContentContainer}
    >
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: profile?.imageUrl,
            cache: 'force-cache',
          }}
          accessible
          accessibilityLabel={profile?.fullName}
          accessibilityHint="On press, scroll to profile info. On long press, navigate to profile page"
          accessibilityRole="imagebutton"
        />
      </View>
      <ProfileInfoItem profile={profile} />
    </ScrollView>
  );
};

export default ProfileScreen;
