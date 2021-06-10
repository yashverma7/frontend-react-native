# frontend-react-native

https://reactnative.dev/docs/tutorial

https://reactnative.dev/docs/getting-started

https://reactnative.dev/docs/tutorial


## Hello World program with props


1. PROPS can be said as the customizable components which take different paramters of the choice of developer 

 CODE SNIPPET:

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

2. here 'name' prop is used and greeting function can be customized using this prop, also allowing the reusability 

3. PROPS are fixed but STATE is needed to chnage the output according to the demand of the user action, network responses etc.

## What's the difference between state and props in React?

In a React component, the props are the variables that we pass from a parent component to a child component. 

Similarly, the state are also variables, with the difference that they are not passed as parameters, but rather that the component initializes and manages them internally.
