import {useState, useEffect} from 'react';
import {View, BackHandler} from 'react-native';

import {addNewNote, editNote} from '../../utils/dataStore';
import style from './style';
import {TextArea, Button} from '../../components';
import globalStyles from '../../theme/globalStyles';

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
    return () => {
      onSave({shouldNavigate: false, state: 'Draft'});
    };
  }, [note]);

  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     () => {
  //       if (note.trim()) {
  //         onSave();
  //       }

  //       return true;
  //     },
  //   );

  //   return () => {
  //     backHandler.remove();
  //   };
  // }, [note]);

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
    const {state = 'Saved', shouldNavigate = true} = options;

    try {
      await addNewNote({note, state: state});
      if (shouldNavigate) {
        navigation.goBack();
      }

      return null;
    } catch (e) {
      alert(e.message);
    }
  };

  const onEditNote = async (options = {}) => {
    const {state = 'Saved', shouldNavigate = true} = options;

    if (note === currentNote.note) {
      if (shouldNavigate) {
        navigation.goBack();
      }
      return null;
    }

    try {
      await editNote({...currentNote, note, state});

      if (options.shouldNavigate) {
        navigation.goBack();
      }

      return null;
    } catch (e) {
      alert(e.message);
    }
  };

  return (
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
  );
};

export default AddEditNote;
