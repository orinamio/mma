import * as React from 'react';
import { Text, View } from 'react-native';

import { ProfileInfoItemProps } from './index.t';
import styles from './style';

const ProfileInfoItem: React.FunctionComponent<ProfileInfoItemProps> = ({
  profile,
  bioNumberOfLines,
}) => {
  const splitFullName = React.useCallback((fullName: string | undefined):
    | string[]
    | undefined => {
    if (!fullName) return;

    const nameSplit: string[] = fullName.split(' ');
    return [nameSplit.shift(), nameSplit.join(' ')];
  }, []);

  const fullName = React.useMemo(() => splitFullName(profile?.fullName), [
    profile?.fullName,
    splitFullName,
  ]);

  return (
    <React.Fragment key={profile.id}>
      <View style={styles.profileInfoHeader}>
        <Text
          style={styles.profileName}
          accessible
          accessibilityLabel={`Full name: ${profile?.fullName}`}
        >
          {Array.isArray(fullName) &&
            fullName.map((name, index) => (
              <Text
                key={`${name}`}
                style={[
                  styles.profileName,
                  index == 0 && styles.profileNameBold,
                ]}
              >
                {`${name} `}
              </Text>
            ))}
        </Text>
        <Text
          style={styles.profileRole}
          accessible
          accessibilityLabel={`Role: ${profile?.role}`}
        >
          {profile?.role}
        </Text>
      </View>
      <View>
        <Text
          style={styles.profileBioHeaderText}
          accessible
          accessibilityLabel="About me"
        >
          About me
        </Text>
        <Text
          style={styles.profileBioBodyText}
          accessible
          accessibilityLabel="Bio"
          numberOfLines={bioNumberOfLines}
          ellipsizeMode="tail"
        >
          {profile?.longBio}
        </Text>
      </View>
    </React.Fragment>
  );
};
export default React.memo(ProfileInfoItem);
