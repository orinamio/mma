import { StyleSheet } from 'react-native';

import colors from '../../constants/color';

export default StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.backgroundColor.white,
  },
  rootContentContainer: {
    padding: 20,
    backgroundColor: colors.backgroundColor.white,
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    height: 75,
    width: 75,
    borderRadius: 75,
    resizeMode: 'contain',
  },
});
