import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserDetails = data => {
  const payload = JSON.stringify({
    username: data.username,
  });

  return AsyncStorage.setItem('user', payload);
};

export const readUserDetails = async () => {
  const stringifiedData = (await AsyncStorage.getItem('user')) || null;
  return JSON.parse(stringifiedData);
};

export const addNewNote = async data => {
  const stringifiedData = (await AsyncStorage.getItem('notes')) || '[]';
  const payload = JSON.parse(stringifiedData);

  const lastItem = payload[payload.length - 1] || {id: 0};

  const newId = lastItem.id + 1;

  payload.push({
    note: data.note,
    addedTime: new Date().toISOString(),
    editedTime: new Date().toISOString(),
    state: data.state,
    id: newId,
  });

  await AsyncStorage.setItem('notes', JSON.stringify(payload));

  return null;
};

export const editNote = async data => {
  const stringifiedData = (await AsyncStorage.getItem('notes')) || '[]';
  const payload = JSON.parse(stringifiedData);
  const itemIndex = payload.findIndex(item => item.id === data.id);

  payload[itemIndex].note = data.note;
  payload[itemIndex].state = data.state;
  payload[itemIndex].editedTime = new Date().toISOString();

  await AsyncStorage.setItem('notes', JSON.stringify(payload));

  return null;
};

export const readNotes = async () => {
  const stringifiedData = (await AsyncStorage.getItem('notes')) || '[]';
  return JSON.parse(stringifiedData);
};
