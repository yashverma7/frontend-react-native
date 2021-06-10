import React from 'react';

import { Text, View } from 'react-native';

//helloworldapp is a functional component here which behaves similar to the way react works in web

//it returns a view component and a text component within it as a child

//text component simply allows us to render a text 

//view component renders a container, containing several styles,

//1.flex : input taken as a string makes the content flexible according to the other flex values, for eg
//it is 2, a positive number it will take twice as size as component with flex value as 1.
//in other cases if flex is 0 it will be sized acc to its height and width being inflexible and
//in case of flex -1 it will be normally sized to its width and height or shrink to its minWidth and minHeight

//here flex=1 will give all the space to the parent component

//2.justifycontent : aligns children of a container in the center of the container's main axis. 
//3.alignitems: aligns children of a container in the center of the container's cross axis.



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
//<View><Text>Hello world!</Text></View>. This is JSX - a syntax for embedding XML within JavaScript.
}
export default HelloWorldApp;
