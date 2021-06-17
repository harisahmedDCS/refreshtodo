// import React from 'react';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  RefreshControl,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  let itemData = [];
  const [text, setText] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  // const [item, setItem] = useState({
  //   name: text,
  //   id: Math.random(),
  // });

  const onPress = () => {
    // setItem({
    //   name: text,
    //   id: Math.random(),
    // });
    const item = {
      name: text,
      id: Math.random(),
    };
    // setText('');
    itemData.push(item);
    console.log('data', itemData);
  };

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setItem('');
  //   wait(1000).then(() => setRefreshing(false));
  // }, []);
  const onRefresh = () => {
    setRefreshing(true);
    setItem('');
    setText('');
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  console.log('second', itemData);
  return (
    <LinearGradient
      colors={['#1488CC', '#2B32B2']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={styles.input}
            placeholder="add an item...."
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.btn}>
            <Entypo name="plus" color={'white'} size={40} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 20}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {/* list of todo */}
          {itemData.map(item => (
            <View
              key={item.id}
              style={[
                styles.todo,
                {
                  flexDirection: 'row',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  margin: 5,
                }}>
                <View>
                  <Text style={styles.todoText}>{item.name}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: '30%',
                  }}>
                  <Ionicons
                    style={{marginRight: '15%'}}
                    name="search"
                    color={'#C70039'}
                    size={30}
                  />
                  <Entypo name="edit" color={'#C70039'} size={30} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        {/* input */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  input: {
    marginTop: 40,
    height: '18%',
    width: '80%',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 20,
    fontSize: 20,
  },
  todo: {
    margin: 10,
    width: '90%',
    height: '60%',
    marginLeft: 20,
    backgroundColor: 'skyblue',
    marginTop: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 12,
    margin: 10,
    fontSize: 20,
    color: 'black',
  },
  btn: {
    padding: 20,
    width: '25%',
    height: '25%',
    borderRadius: 20,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default App;
