import {useNavigation} from '@react-navigation/native';
import {View, Text, Button, ScrollView, FlatList} from 'react-native';

import {NoteItem} from '../../components';
import {ROUTES} from '../../navigation/routes';
import globalStyles from '../../theme/globalStyles';
import DUMMY_NOTES from './DUMMY_NOTES.json';

const Home = () => {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={DUMMY_NOTES}
        renderItem={({item}) => <NoteItem data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
