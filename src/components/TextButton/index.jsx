import {Text, TouchableOpacity} from 'react-native';

const TextButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
      <Text style={props.style}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
