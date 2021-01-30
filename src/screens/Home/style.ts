import { StyleSheet } from 'react-native';

import * as constants from '../../constants/ui';
import colors from '../../constants/color';

export default StyleSheet.create({
  avatarListContainer: {
    backgroundColor: colors.backgroundColor.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default,
    height: constants.AVATAR_LIST_CONTAINER_HEIGHT,
  },
  avatarListContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:
      constants.AVATAR_LIST_CENTER_POINT / 2 -
      constants.AVATAR_CONTAINER_HORIZONTAL_MARGIN,
    paddingRight:
      constants.AVATAR_LIST_CENTER_POINT / 2 -
      constants.AVATAR_CONTAINER_HORIZONTAL_MARGIN,
  },
  profileInfoListContainer: {
    backgroundColor: colors.backgroundColor.white,
    paddingLeft: constants.PROFILE_CONTAINER_PADDING,
    paddingRight: constants.PROFILE_CONTAINER_PADDING,
  },
  avatarItemContainer: {
    margin: constants.AVATAR_CONTAINER_MARGIN,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: constants.AVATAR_CONTAINER_WITH_PADDING_HEIGHT,
    width: constants.AVATAR_CONTAINER_WITH_PADDING_HEIGHT,
    borderRadius: constants.AVATAR_CONTAINER_WITH_PADDING_HEIGHT,
    backgroundColor: 'transparent',
  },
  avatarItemContainerActive: {
    backgroundColor: colors.color.aliceBlue,
  },
  avatar: {
    height: constants.AVATAR_HEIGHT,
    width: constants.AVATAR_HEIGHT,
    borderRadius: constants.AVATAR_HEIGHT,
    resizeMode: 'contain',
  },
  //profile info
  profileInfoContainer: {
    height: constants.MIN_PROFILE_INFO_VIEW_HEIGHT,
  },
});
