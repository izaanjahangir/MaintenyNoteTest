import {View, Text, TextInput} from 'react-native';

import style from './style';

const TextArea = props => {
  return (
    <View style={style.container}>
      <Text style={style.labelText}>{props.label}</Text>
      <TextInput
        multiline={true}
        placeholder={props.placeholder}
        style={style.input}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default TextArea;
