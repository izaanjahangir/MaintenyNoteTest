import {useNavigation} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {ROUTES} from '../../navigation/routes';

const Home = () => {
  const navigation = useNavigation();

  const onAddEditNavigate = () => {
    navigation.navigate(ROUTES.ADD_EDIT_NOTE);
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Test" onPress={onAddEditNavigate} />
    </View>
  );
};

export default Home;
