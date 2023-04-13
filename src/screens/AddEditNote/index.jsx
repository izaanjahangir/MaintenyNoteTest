import {useEffect} from 'react';
import {View} from 'react-native';

import style from './style';
import {TextArea, Button} from '../../components';
import globalStyles from '../../theme/globalStyles';
import {useNavigation} from '@react-navigation/native';

const AddEditNote = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: 'Add Note'});
  }, []);

  return (
    <View style={[globalStyles.container, style.container]}>
      <TextArea label="Note" placeholder="Start jotting down something" />
      <View style={style.saveButtonContainer}>
        <Button>Save</Button>
      </View>
    </View>
  );
};

export default AddEditNote;
