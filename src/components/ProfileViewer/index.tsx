import * as React from 'react';
import { View, FlatList } from 'react-native';

import AvatarList from '../AvatarList';
import ProfileInfoList from '../ProfileInfoList';

import { ProfileViewerProps } from './index.t';
import * as constants from '../../constants/ui';

const INITIAL_PROFILE_LIST_NUMBER_TO_RENDER = 3;

const ProfileViewer: React.FunctionComponent<ProfileViewerProps> = ({
  activeIndex,
  setActiveIndex,
  data = [],
  renderAvatarItem,
  renderProfileInfoItem,
}) => {
  // refs
  const avatarListRef = React.useRef<FlatList | null>(null);
  const profileInfoListRef = React.useRef<FlatList | null>(null);
  const currentProfileIndexRef = React.useRef(activeIndex);

  // handle view sync
  const syncScrollViews = React.useCallback(
    (index: number) => {
      /* make avatar info flat list scroll to the correct view area
      if a renderItem passed to ProfileViewer component */
      if (renderAvatarItem) {
        avatarListRef.current?.scrollToIndex({
          index,
        });
      }

      /* make profile info flat list scroll to the correct view area
      if a renderItem passed to ProfileViewer component */
      if (renderProfileInfoItem) {
        profileInfoListRef.current?.scrollToIndex({
          index,
          viewOffset: 0,
        });
      }
    },
    [renderAvatarItem, renderProfileInfoItem]
  );

  const updateCurrentProfileIndex = React.useCallback(
    (index: number) => {
      currentProfileIndexRef.current = index;
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  // effects
  // call scroll view sync update when activeIndex changes
  React.useEffect(() => {
    if (data?.length) {
      // no need to scroll if data doesn't exist
      syncScrollViews(activeIndex);
    }
  }, [activeIndex, syncScrollViews, data]);

  // on scroll cb handlers
  const onMomentumScrollEndAvatarFlatList = React.useCallback(
    ({ nativeEvent }) => {
      const position = nativeEvent.contentOffset;

      // current index
      const index = Math.max(
        0,
        Math.round(position.x / constants.AVATAR_CONTAINER_WIDTH)
      );

      if (index !== activeIndex) {
        updateCurrentProfileIndex(index);
      }
    },
    [updateCurrentProfileIndex, activeIndex]
  );

  const onMomentumScrollEndProfileInfoFlatList = React.useCallback(
    ({ nativeEvent }) => {
      const position = nativeEvent.contentOffset;

      // current index
      const index = Math.max(0, Math.round(position.y / constants.MIN_PROFILE_INFO_VIEW_HEIGHT));

      if (index !== activeIndex) {
        updateCurrentProfileIndex(index);
      }
    },
    [updateCurrentProfileIndex, activeIndex]
  );

  // render
  return (
    <View>
      <AvatarList
        ref={avatarListRef}
        data={data}
        renderItem={renderAvatarItem}
        onScroll={onMomentumScrollEndAvatarFlatList}
      />
      <ProfileInfoList
        ref={profileInfoListRef}
        data={data}
        renderItem={renderProfileInfoItem}
        onScroll={onMomentumScrollEndProfileInfoFlatList}
        initialNumToRender={INITIAL_PROFILE_LIST_NUMBER_TO_RENDER}
      />
    </View>
  );
};

export default ProfileViewer;
