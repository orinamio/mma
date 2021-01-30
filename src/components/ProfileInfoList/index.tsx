import * as React from 'react';
import { FlatList } from 'react-native';

import styles from '../../screens/Home/style';
import * as constants from '../../constants/ui';
import { ProfileInfoListProps } from './index.t';

const INITIAL_PROFILE_LIST_NUMBER_TO_RENDER = 3;

const ProfileInfoList: React.FunctionComponent<ProfileInfoListProps> = React.forwardRef<
  FlatList,
  ProfileInfoListProps
>(({ activeIndex, setActiveIndex, data, renderItem }, ref) => {
  // profile info flat list callbacks
  const getItemLayoutProfileInfoFlatList = React.useCallback((data, index) => {
    return {
      length: constants.MIN_PROFILE_INFO_VIEW_HEIGHT,
      offset: constants.MIN_PROFILE_INFO_VIEW_HEIGHT * index,
      index,
    };
  }, []);

  const onMomentumScrollEndProfileInfoFlatList = React.useCallback(
    ({ nativeEvent }) => {
      const position = nativeEvent.contentOffset;

      // current index
      const index = Math.max(
        0,
        Math.round(position.y / constants.MIN_PROFILE_INFO_VIEW_HEIGHT)
      );

      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    },
    [setActiveIndex, activeIndex]
  );

  // render
  return (
    <FlatList
      testID="profile-info-list"
      ref={ref}
      showsVerticalScrollIndicator={false}
      pagingEnabled={true}
      extraData={activeIndex}
      data={data}
      keyExtractor={(profile) => profile.id}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.profileInfoListContainer}
      indicatorStyle="default"
      initialNumToRender={INITIAL_PROFILE_LIST_NUMBER_TO_RENDER}
      renderItem={renderItem}
      getItemLayout={getItemLayoutProfileInfoFlatList}
      onMomentumScrollEnd={onMomentumScrollEndProfileInfoFlatList}
    />
  );
});

export default ProfileInfoList;
