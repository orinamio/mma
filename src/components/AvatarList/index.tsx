import * as React from 'react';
import { FlatList } from 'react-native';

import styles from '../../screens/Home/style';
import * as constants from '../../constants/ui';
import { AvatarListProps } from './index.t';

const AvatarList: React.FunctionComponent<AvatarListProps> = React.forwardRef<
  FlatList,
  AvatarListProps
>(({ activeIndex, setActiveIndex, data, renderItem }, ref) => {
  // avatar flat list callbacks
  const getItemLayoutAvatarFlatList = React.useCallback((data, index) => {
    return {
      length: constants.AVATAR_CONTAINER_WIDTH,
      offset: constants.AVATAR_CONTAINER_WIDTH * index,
      index,
    };
  }, []);

  const onMomentumScrollEndAvatarFlatList = React.useCallback(
    ({ nativeEvent }) => {
      const position = nativeEvent.contentOffset;

      // current index
      const index = Math.max(
        0,
        Math.round(position.x / constants.AVATAR_CONTAINER_WIDTH)
      );

      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    },
    [setActiveIndex, activeIndex]
  );

  // render views items
  const renderAvatarItem = React.useCallback(renderItem, [renderItem]);

  // render
  return (
    <FlatList
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
      renderItem={renderAvatarItem}
      getItemLayout={getItemLayoutAvatarFlatList}
      onMomentumScrollEnd={onMomentumScrollEndAvatarFlatList}
    />
  );
});

export default AvatarList;
