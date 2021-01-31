import * as React from 'react';
import { FlatList } from 'react-native';

import styles from './style';
import * as constants from '../../constants/ui';
import { ProfileInfoListProps } from './index.t';

const ProfileInfoList: React.FunctionComponent<ProfileInfoListProps> = React.forwardRef<
  FlatList,
  ProfileInfoListProps
>(({ data, renderItem, onScroll, initialNumToRender }, ref) => {
  // profile info flat list callbacks
  const getItemLayoutProfileInfoFlatList = React.useCallback((data, index) => {
    return {
      length: constants.MIN_PROFILE_INFO_VIEW_HEIGHT,
      offset: constants.MIN_PROFILE_INFO_VIEW_HEIGHT * index,
      index,
    };
  }, []);

  // render
  return (
    <FlatList
      testID="profile-info-list"
      ref={ref}
      showsVerticalScrollIndicator={false}
      pagingEnabled={true}
      data={data}
      keyExtractor={(profile) => profile.id}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.profileInfoListContainer}
      indicatorStyle="default"
      initialNumToRender={initialNumToRender}
      renderItem={renderItem}
      getItemLayout={getItemLayoutProfileInfoFlatList}
      onMomentumScrollEnd={onScroll}
    />
  );
});

export default React.memo(ProfileInfoList);
