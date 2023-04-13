import {StyleSheet} from 'react-native';
import {THEME_DARK, THEME_WHITE} from '../../theme/colors';
import {FONT_SIZE_NORMAL, SPACING_NORMAL} from '../../theme/measurements';

export default StyleSheet.create({
  container: {
    backgroundColor: THEME_DARK,
    padding: SPACING_NORMAL,
  },
  text: {
    color: THEME_WHITE,
    fontSize: FONT_SIZE_NORMAL,
    textAlign: 'center',
    fontWeight: "500"
  },
});
