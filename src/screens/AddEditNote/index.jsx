import {useState, useEffect} from 'react';
import {View, BackHandler} from 'react-native';

import {addNewNote, editNote} from '../../utils/dataStore';
import style from './style';
import {TextArea, Button} from '../../components';
import globalStyles from '../../theme/globalStyles';
import Header from '../../components/Header';

const AddEditNote = ({navigation, route}) => {
  const currentNote = route.params;
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!currentNote) {
      navigation.setOptions({title: 'Add Note'});
    } else {
      setNote(currentNote.note);
    }
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBack,
    );

    return () => {
      backHandler.remove();
    };
  }, [note]);

  const onNoteTextChange = e => {
    setNote(e);
  };

  const onSave = async options => {
    if (currentNote) {
      return onEditNote(options);
    }

    onAddNote(options);
  };

  const onAddNote = async (options = {}) => {
    const {state = 'Saved'} = options;

    try {
      await addNewNote({note, state: state});

      navigation.goBack();

      return null;
    } catch (e) {
      alert(e.message);
    }
  };

  const onEditNote = async (options = {}) => {
    const {state = 'Saved'} = options;

    if (note === currentNote.note && currentNote.state === 'Saved') {
      navigation.goBack();

      return null;
    }

    try {
      await editNote({...currentNote, note, state});
      navigation.goBack();

      return null;
    } catch (e) {
      alert(e.message);
    }
  };

  const onBack = () => {
    if (!note.trim()) return false;

    onSave({state: 'Draft'});

    return true;
  };

  const onBackPress = () => {
    if (!note.trim()) return navigation.goBack();

    onBack();
  };

  return (
    <View style={{flex: 1}}>
      <Header onBackPress={onBackPress}>Add Note</Header>
      <View style={[globalStyles.container, style.container]}>
        <TextArea
          value={note}
          onChangeText={onNoteTextChange}
          label="Note"
          placeholder="Start jotting down something"
        />
        <View style={style.saveButtonContainer}>
          <Button onPress={() => onSave({})} disabled={!note}>
            Save
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddEditNote;
