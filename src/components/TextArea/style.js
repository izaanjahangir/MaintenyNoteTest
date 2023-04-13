import {StyleSheet} from 'react-native';
import {THEME_WHITE, THEME_BLACK} from '../../theme/colors';
import {
    FONT_SIZE_MEDIUM,
  FONT_SIZE_NORMAL,
  SPACING_NORMAL,
  SPACING_SMALL,
} from '../../theme/measurements';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  labelText: {
    color: THEME_BLACK,
    fontSize: FONT_SIZE_MEDIUM * 0.9,
    fontWeight: "bold",
    marginBottom: SPACING_SMALL,
  },
  input: {
    backgroundColor: THEME_WHITE,
    borderColor: THEME_BLACK,
    borderWidth: 0.5,
    paddingVertical: SPACING_NORMAL,
    paddingHorizontal: SPACING_NORMAL,
    fontSize: FONT_SIZE_NORMAL,
    flex: 1,
    textAlignVertical: "top"
  },
});
