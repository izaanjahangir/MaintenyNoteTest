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
