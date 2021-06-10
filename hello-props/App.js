import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//props can be said as the customizable components which take different paramters of the choice of developer 
const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})
//here 'name' prop is used and greeting function can be customized using this prop, also allowing the reusability 
//PROPS are fixed but STATE is needed to chnage the output according to the demand of the user action, network responses etc.
//What's the difference between state and props in React?#
//In a React component, the props are the variables that we pass from a parent component to a child component. 
//Similarly, the state are also variables, with the difference that they are not passed as parameters, but rather that the component initializes and manages them internally.

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;
