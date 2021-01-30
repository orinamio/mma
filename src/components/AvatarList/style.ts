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
});
