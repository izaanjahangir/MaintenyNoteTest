import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList} from 'react-native';

import style from './style';
import {Button, NoteItem, TextButton} from '../../components';
import {ROUTES} from '../../navigation/routes';
import globalStyles from '../../theme/globalStyles';
import DUMMY_NOTES from './DUMMY_NOTES.json';
import {readUserDetails} from '../../utils/dateStore';
import useUserDetails from '../../hooks/useUserDetails';

const Home = () => {
  const user = useUserDetails();
  const navigation = useNavigation();

  const onNotePress = item => {
    navigation.navigate(ROUTES.ADD_EDIT_NOTE, {item});
  };

  const onChangeName = () => {
    navigation.navigate(ROUTES.Login);
  };

  return (
    <View style={globalStyles.container}>
      <Button onPress={onChangeName}>Change name</Button>
      <View style={style.topContainer}>
        <Text numberOfLines={1} style={style.usernameText}>
          Welcome, {user?.username}
        </Text>
      </View>
      <FlatList
        data={DUMMY_NOTES}
        renderItem={({item}) => (
          <NoteItem onPress={() => onNotePress(item)} data={item} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
