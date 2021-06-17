import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const arr = [];
  const onPress = () => {
    console.log(arr);
    arr.push(2, 3);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>dsadasdsad</Text>
    </TouchableOpacity>
  );
};

export default App;

const styles = StyleSheet.create({});
