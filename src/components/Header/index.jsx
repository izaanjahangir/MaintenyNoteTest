import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';

const Header = props => {
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.5}
        disabled={!props.onBackPress}
        onPress={props.onBackPress}
        style={style.container}>
        {props.onBackPress && (
          <Image
            style={style.backArrow}
            source={require('../../assets/back-arrow.png')}
          />
        )}
        <Text style={style.headerTitle}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
