import {StyleSheet} from 'react-native';
import {THEME_BLACK, THEME_WHITE} from '../../theme/colors';
import {
  FONT_SIZE_MEDIUM,
  FONT_SIZE_NORMAL,
  SPACING_MEDIUM,
  SPACING_NORMAL,
} from '../../theme/measurements';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: THEME_WHITE,
    flexDirection: "row"
  },
  container: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING_MEDIUM,
  },
  backArrow: {
    width: 25,
    height: 25,
  },
  headerTitle: {
    fontSize: FONT_SIZE_NORMAL * 1.2,
    fontWeight: 'bold',
    color: THEME_BLACK,
    marginLeft: SPACING_NORMAL,
  },
});
