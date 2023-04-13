import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {ROUTES} from '../../navigation/routes';

const Login = () => {
  const navigation = useNavigation();

  const onHomeNavigate = () => {
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Test" onPress={onHomeNavigate} />
    </View>
  );
};

export default Login;
