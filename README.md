# frontend-react-native

https://reactnative.dev/docs/tutorial

https://reactnative.dev/docs/getting-started

https://reactnative.dev/docs/tutorial

## Hello World

helloworldapp is a functional component here which behaves similar to the way react works in web, it returns a view component and a text component within it as a child

### I. text component simply allows us to render a text

### II. view component renders a container, containing several styles,

1. flex : input taken as a string makes the content flexible according to the other flex values, for eg it is 2, a positive number it will take twice as size as component with flex value as 1.
in other cases if flex is 0 it will be sized acc to its height and width being inflexible and in case of flex -1 it will be normally sized to its width and height or shrink to its minWidth and minHeight
here flex=1 will give all the space to the parent component

2. justifycontent : aligns children of a container in the center of the container's main axis. 
3. alignitems: aligns children of a container in the center of the container's cross axis.

CODE SNIPPET:

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
 }
 
<View><Text>Hello world!</Text></View>. This is JSX - a syntax for embedding XML within JavaScript.




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

## Classes

## Styling Text
## Adding an image
## Creating a button
