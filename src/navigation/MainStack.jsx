import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from './routes';
import Home from '../screens/Home';
import AddEditNote from '../screens/AddEditNote';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.Login} component={Login} />
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.ADD_EDIT_NOTE} component={AddEditNote} />
    </Stack.Navigator>
  );
};

export default MainStack;
