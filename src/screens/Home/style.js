import {StyleSheet} from 'react-native';
import {THEME_BLACK} from '../../theme/colors';
import {
  FONT_SIZE_LARGE,
  FONT_SIZE_NORMAL,
  FONT_SIZE_SMALL,
  SPACING_MEDIUM,
  SPACING_SMALL,
} from '../../theme/measurements';

export default StyleSheet.create({
  topContainer: {
    marginVertical: SPACING_SMALL,
    marginTop: SPACING_MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
  },
  usernameText: {
    color: THEME_BLACK,
    fontSize: FONT_SIZE_LARGE,
    fontWeight: 'bold',
    flex: 1,
  },
});
