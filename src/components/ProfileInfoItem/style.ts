import { StyleSheet } from 'react-native';

import colors from '../../constants/color';
import typography from '../../constants/typography';

export default StyleSheet.create({
  profileInfoHeader: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  profileName: {
    ...typography.size.large,
  },
  profileNameBold: {
    ...typography.weight.bold,
  },
  profileRole: {
    marginTop: 4,
    color: colors.color.primary,
    ...typography.size.medium,
  },
  profileBioHeaderText: {
    ...typography.size.medium,
    ...typography.weight.bold,
  },
  profileBioBodyText: {
    marginTop: 8,
    color: colors.color.primary,
    ...typography.size.medium,
  },
});
