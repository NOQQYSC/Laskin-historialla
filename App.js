import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image, Text } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);


  function plus() {
    let total = 0;
    total = num1 + num2;
    setTotal(total);
    const text = `${num1} +  ${num2} = ${total}`;
    setData([...data, text]);
    setNum1(0);
    setNum2(0);
    initialFocus.current.focus();
  }
  
  function minus() {
    let total = 0;
    total = num1 - num2;
    setTotal(total);
    const text = `${num1} -  ${num2} = ${total}`;
    setData([...data, text]);
    setNum1(0);
    setNum2(0);
    initialFocus.current.focus();
  }
  

  return (
    
    <View style={styles.container}>
      <Text>Result: {total}</Text>
      <TextInput style={styles.input} type="number" ref={initialFocus} keyboardType = 'numeric' placeholder="0" onChangeText={num1 => setNum1(Number.parseInt(num1))} value={num1}/>
      <TextInput style={styles.input} type="number" keyboardType = 'numeric' placeholder="0" onChangeText={num2 => setNum2(Number.parseInt(num2))} value={num2}/>
      <View style={styles.buttons}>
      <Button onPress={plus} title="+" />
      <Button onPress={minus} title="-" />
      <StatusBar style="auto" />
      </View>
      <FlatList
      ListHeaderComponent={<Text>History</Text>} data={data} keyExtractor={(item, index) => index} renderItem={({item}) => <Text>{item}</Text>}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
    
  },

buttons: {
  
  flexDirection: 'row', 
  
  alignItems: 'center', 
  justifyContent: 'space-around'

},

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
    
  }
});