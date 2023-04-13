import {View, Text, TextInput as TextInputLib} from 'react-native';
import style from './style';

const TextInput = props => {
  return (
    <View style={style.container}>
      <Text style={style.labelText}>{props.label}</Text>
      <TextInputLib
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        style={style.input}
      />
    </View>
  );
};

export default TextInput;
