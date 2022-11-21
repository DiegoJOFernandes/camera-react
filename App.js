import { Camera, CameraType } from 'expo-camera';
import React, { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  const camRef =  useRef(null); 
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture(){
    if(camRef){
      const data = await camRef.current.takePictureAsync();
      console.log(data)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={type} ref={camRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.buttontwo} onPress={takePicture}>
        <FontAwesome name='camera' size={23} color="#FFF"></FontAwesome>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  buttontwo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#121212',
    margin: 20,
    borderRadius: 10,
    height: 50

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
