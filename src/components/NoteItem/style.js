import {StyleSheet} from 'react-native';
import {SECONDARY_THEME_DARK, THEME_WHITE} from '../../theme/colors';
import {
  BORDER_RADIUS_NORMAL,
  FONT_SIZE_NORMAL,
  FONT_SIZE_SMALL,
  SPACING_NORMAL,
  SPACING_SMALL,
} from '../../theme/measurements';

export default StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_THEME_DARK,
    marginVertical: SPACING_SMALL,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_NORMAL,
    borderRadius: BORDER_RADIUS_NORMAL,
  },
  noteText: {
    fontSize: FONT_SIZE_NORMAL,
    color: THEME_WHITE,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  extraDetailLabel: {
    color: THEME_WHITE,
    fontSize: FONT_SIZE_SMALL,
    fontWeight: 'bold',
  },
  extraDetailText: {
    color: THEME_WHITE,
    fontSize: FONT_SIZE_SMALL,
  },
});
