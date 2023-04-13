import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';

import style from './style';
import globalStyles from '../../theme/globalStyles';
import {ROUTES} from '../../navigation/routes';
import {Button, TextInput} from '../../components';

const Login = () => {
  const navigation = useNavigation();

  const onHomeNavigate = () => {
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View style={[globalStyles.container, style.container]}>
      <Text style={style.mainHeadingText}>Welcome to Mainteny Notes</Text>
      <View style={style.formContainer}>
        <TextInput placeholder="Enter your name" label="Username" />
        <Button onPress={onHomeNavigate}>Let's Explore</Button>
      </View>
    </View>
  );
};

export default Login;
