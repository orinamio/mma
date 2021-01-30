import { StyleSheet } from 'react-native';

import colors from '../../constants/color';
import * as constants from '../../constants/ui';

export default StyleSheet.create({
  profileInfoListContainer: {
    backgroundColor: colors.backgroundColor.white,
    paddingLeft: constants.PROFILE_CONTAINER_PADDING,
    paddingRight: constants.PROFILE_CONTAINER_PADDING,
  },
});
