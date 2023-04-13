import {View, Text, TouchableOpacity} from 'react-native';

import {HorizontalSeperator} from '../index';
import style from './style';
import {formatDateTime} from '../../utils/dateTime';

const NoteItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={style.container}>
      <Text numberOfLines={3} style={style.noteText}>
        {props.data.note}
      </Text>
      <HorizontalSeperator />
      <View style={style.rowContainer}>
        <Text style={style.extraDetailLabel}>State: </Text>
        <Text style={style.extraDetailText}>{props.data.state}</Text>
      </View>
      <View style={style.rowContainer}>
        <Text style={style.extraDetailLabel}>Created on: </Text>
        <Text style={style.extraDetailText}>
          {formatDateTime(props.data.addedTime)}
        </Text>
      </View>
      <View style={style.rowContainer}>
        <Text style={style.extraDetailLabel}>Last edited on: </Text>
        <Text style={style.extraDetailText}>
          {formatDateTime(props.data.editedTime)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteItem;
