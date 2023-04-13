import {useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {View, Text, FlatList} from 'react-native';

import style from './style';
import {Button, NoteItem} from '../../components';
import {ROUTES} from '../../navigation/routes';
import globalStyles from '../../theme/globalStyles';
import {readNotes} from '../../utils/dataStore';
import useUserDetails from '../../hooks/useUserDetails';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const user = useUserDetails();
  const navigation = useNavigation();

  useFocusEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      let data = await readNotes();
      data = data.sort(
        (a, b) =>
          new Date(b.editedTime).valueOf() - new Date(a.editedTime).valueOf(),
      );

      setNotes(data);
    } catch (e) {
      alert(e.message);
    }
  };

  const onNotePress = item => {
    navigation.navigate(ROUTES.ADD_EDIT_NOTE, {...item});
  };

  const onAddNote = () => {
    navigation.navigate(ROUTES.ADD_EDIT_NOTE);
  };

  return (
    <View style={[globalStyles.container, style.container]}>
      <View style={style.topContainer}>
        <Text numberOfLines={1} style={style.usernameText}>
          Welcome, {user?.username}
        </Text>
      </View>
      <FlatList
        data={notes}
        renderItem={({item}) => (
          <NoteItem onPress={() => onNotePress(item)} data={item} />
        )}
        keyExtractor={item => item.id}
      />
      <View style={style.bottomButtonContainer}>
        <Button onPress={onAddNote}>Add note</Button>
      </View>
    </View>
  );
};

export default Home;
