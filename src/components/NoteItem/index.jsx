import {View, Text} from 'react-native';

import {HorizontalSeperator} from '../index';
import style from './style';

const NoteItem = props => {
  return (
    <View style={style.container}>
      <Text numberOfLines={3} style={style.noteText}>
        {props.data.note}
      </Text>
      <HorizontalSeperator />
      <View style={style.rowContainer}>
        <Text style={style.extraDetailLabel}>Created on: </Text>
        <Text style={style.extraDetailText}>14-Apr-2023</Text>
      </View>
      <View style={style.rowContainer}>
        <Text style={style.extraDetailLabel}>Last edited on: </Text>
        <Text style={style.extraDetailText}>14-Apr-2023</Text>
      </View>
    </View>
  );
};

export default NoteItem;
