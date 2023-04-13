import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import style from './style';
import globalStyles from '../../theme/globalStyles';
import {ROUTES} from '../../navigation/routes';
import {Button, TextInput} from '../../components';
import {setUserDetails} from '../../utils/dateStore';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onExplore = async () => {
    try {
      await setUserDetails({username});
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: ROUTES.HOME}],
        }),
      );
    } catch (e) {
      alert(e.message);
    }
  };

  const onUsernameTextChange = e => {
    setUsername(e);
  };

  return (
    <View style={[globalStyles.container, style.container]}>
      <Text style={style.mainHeadingText}>Welcome to Mainteny Notes</Text>
      <View style={style.formContainer}>
        <TextInput
          onChangeText={onUsernameTextChange}
          value={username}
          placeholder="Enter your name"
          label="Username"
        />
        <Button disabled={!username} onPress={onExplore}>
          Let's Explore
        </Button>
      </View>
    </View>
  );
};

export default Login;
