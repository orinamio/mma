import * as React from 'react';
import { Image, Pressable, View } from 'react-native';

import { AvatarItemProps } from '../index.t';
import styles from '../style';

const AvatarItem: React.FunctionComponent<AvatarItemProps> = ({
  profile,
  isActive,
  index,
  onAvatarPress,
  onAvatarLongPress,
}) => {
  // callback handlers
  const onAvatarPressCb = React.useCallback(() => {
    onAvatarPress(index);
  }, [index, onAvatarPress]);

  const onAvatarLongPressCb = React.useCallback(() => {
    onAvatarLongPress && onAvatarLongPress(index, profile);
  }, [profile, index, onAvatarLongPress]);

  return (
    <View
      key={profile.id}
      style={[
        styles.avatarItemContainer,
        isActive && styles.avatarItemContainerActive,
      ]}
    >
      <Pressable onPress={onAvatarPressCb} onLongPress={onAvatarLongPressCb}>
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
      </Pressable>
    </View>
  );
};

export default React.memo(AvatarItem);
