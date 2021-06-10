//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


//import logo from './assets/logo.png'; for uploading the image directly from asset folder in local machine 
//or the image can also be uploaded through url

export default function App() {
	const[selectedImage, setSelectedImage] = React.useState(null);
	
	let openImagePickerAsync= async ()=> {
		let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
		
		if (permissionResult.granted ===false){
			alert("Permission to access camera roll is required!");
			return;
		}
		
//this syntax needs to be followed in the case of picking an image from gallery
//when image is chosen, the url can be seen in the metro builder
		let pickerResult= await ImagePicker.launchImageLibraryAsync();
		
		
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  
	}
  return (
    <View style={styles.container}>
		<Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo} />
      <Text style={styles.instructions} >
	  To share a photo from your phone with a friend,just press the button below! 
		</Text>
		  
		  
		<TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
		 <Text style={styles.buttonText}>Pick a photo</Text>
		</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
//code organzation break, moving the styles into one place so the code looks easier to read
  logo: {
  	width:305,
	height: 159,
	marginBottom:20,
  },
  instructions: {
  	color: '#888',
	fontSize: 18,
	marginHorizontal:15,
	marginBottom: 10,
  },
  button: {
  	backgroundColor: "blue",
	 padding: 20,
	 borderRadius: 5,
  },
 //here padding is used to make the button larger, so the user doesn't have to tap the finger with 
 //very high precision, padding is an important part of Touchable Opacity along with width,height 
 //and margin
  buttonText:{
  	fontSize: 20,
	 color:'#fff',
  },
  
  thumbnail:{
  	width:300,
	 height:300,
	  resizeMode:"contain"
  }
});
