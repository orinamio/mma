import * as React from 'react';
import { View, FlatList } from 'react-native';

import { ProfileViewerProps } from './index.t';
import AvatarList from '../AvatarList';
import ProfileInfoList from '../ProfileInfoList';

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

  // render
  return (
    <View>
      <AvatarList
        ref={avatarListRef}
        data={data}
        activeIndex={activeIndex}
        setActiveIndex={updateCurrentProfileIndex}
        renderItem={renderAvatarItem}
      />
      <ProfileInfoList
        ref={profileInfoListRef}
        data={data}
        activeIndex={activeIndex}
        setActiveIndex={updateCurrentProfileIndex}
        renderItem={renderProfileInfoItem}
      />
    </View>
  );
};

export default ProfileViewer;
