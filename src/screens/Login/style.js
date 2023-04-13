import {StyleSheet} from 'react-native';
import {THEME_BLACK} from '../../theme/colors';
import {
  FONT_SIZE_LARGE,
  SPACING_LARGE,
  SPACING_X_LARGE,
} from '../../theme/measurements';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainHeadingText: {
    color: THEME_BLACK,
    fontSize: FONT_SIZE_LARGE,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: SPACING_X_LARGE,
  },
  formContainer: {
    marginTop: SPACING_LARGE,
    marginBottom: SPACING_X_LARGE * 1.5,
  },
});
