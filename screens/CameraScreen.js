import React from 'react';

import {Text, View, Image, TouchableOpacity, StyleSheet, CameraRoll} from 'react-native'

import {RNCamera} from 'react-native-camera'
import {useCamera} from 'react-native-camera-hooks'

import Swipeable from 'react-native-gesture-handler/Swipeable'


const CameraScreen = ({navigation}) => {

    takePicture = async () => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          console.log(data.uri)
        }
    };

    return(
            <View style={styles.body}>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                >
                    <View style={{position: 'absolute', bottom: 20, left: '35%'}}>
                    
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture} style={{
                        position: 'absolute', 
                        bottom: 60, 
                        borderRadius: 20, 
                        backgroundColor: '#999b9e',
                        paddingHorizontal: 20,
                        paddingVertical: 20
                    }}>
                    <Text style={{ fontSize: 14, color: '#ffff' }}> MOMENTS </Text>
                    </TouchableOpacity>
                    </View>
                    
                </RNCamera>
            </View>
       
    )
}

const styles = StyleSheet.create({
    body: {flex: 1},
    preview: {flex: 1,justifyContent: 'center'}
})

export default CameraScreen