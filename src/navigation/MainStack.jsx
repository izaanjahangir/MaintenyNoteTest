import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from './routes';
import Home from '../screens/Home';
import AddEditNote from '../screens/AddEditNote';
import Login from '../screens/Login';
import useUserDetails from '../hooks/useUserDetails';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const user = useUserDetails();

  return (
    <Stack.Navigator initialRouteName={user ? ROUTES.HOME : ROUTES.Login}>
      {!user && (
        <Stack.Screen
          options={{headerShown: false}}
          name={ROUTES.Login}
          component={Login}
        />
      )}
      <Stack.Screen
        name={ROUTES.HOME}
        options={{
          title: 'Notes',
        }}
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Note Details',
          headerShown: false,
        }}
        name={ROUTES.ADD_EDIT_NOTE}
        component={AddEditNote}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
