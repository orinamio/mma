import * as React from 'react';
import { FlatList } from 'react-native';

import styles from '../../screens/Home/style';
import * as constants from '../../constants/ui';
import { AvatarListProps } from './index.t';

const AvatarList: React.FunctionComponent<AvatarListProps> = React.forwardRef<
  FlatList,
  AvatarListProps
>(({ data, renderItem, onScroll }, ref) => {
  // avatar flat list callbacks
  const getItemLayoutAvatarFlatList = React.useCallback((data, index) => {
    return {
      length: constants.AVATAR_CONTAINER_WIDTH,
      offset: constants.AVATAR_CONTAINER_WIDTH * index,
      index,
    };
  }, []);

  return (
    <FlatList
      testID="avatar-list"
      ref={ref}
      bouncesZoom={false}
      showsHorizontalScrollIndicator={false}
      centerContent={true}
      horizontal={true}
      data={data}
      keyExtractor={(profile) => profile.id}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.avatarListContainer}
      contentContainerStyle={styles.avatarListContentContainer}
      renderItem={renderItem}
      getItemLayout={getItemLayoutAvatarFlatList}
      onMomentumScrollEnd={onScroll}
    />
  );
});

export default AvatarList;
