import {Text, TouchableOpacity} from 'react-native';
import style from './style';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      style={style.container}>
      <Text style={style.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
