import React from 'react';

import {Text, View, Button, Image, TouchableOpacity, ImageBackground} from 'react-native'

import {COLORS, icons, images} from "../constants"

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

function renderNavBar({navigation}) {
  return (
           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 6, bottom: -440}}>
         
            <Icon.Button
              name="group"
              backgroundColor="#c7c9c8"
              onPress={()=> navigation.navigate("GroupScreen")}
              borderRadius={25}
              style={{width: 50, height: 50}}
              size={20}
              iconStyle={{marginLeft: 5}}
            >
            </Icon.Button>
            <Icon.Button
              name="camera"
              backgroundColor="#c7c9c8"
              onPress={()=> navigation.navigate("CamScreen")}
              borderRadius={25}
              style={{width: 50, height: 50}}
              size={20}
              iconStyle={{marginLeft: 5}}
            >
            </Icon.Button>
            
          </View>
       
  )
}

const Home= ({navigation}) => {
    return (
      <ImageBackground source={require('../assets/images/background2.jpg')} style={{width: '100%', height: '100%', size: 'cover'}}>
        
        <View style={{marginTop: 5, left: 30}}>
          <View style={{marginTop: 40, flexDirection: 'row', marginLeft: 260}}>
            <Text style={{fontSize: 18, fontFamily: 'Lato-light'}}> Sat, 10 Jul </Text>
          </View>
          <View style={{paddingTop: 150}}>
            <Text style={{fontSize: 25, fontFamily: 'Lato'}}>  "Daily Theme"</Text>
            <Text style={{left: 15, fontSize: 22, fontFamily: 'Lato-Bolditalic'}}>Sunset</Text>
            <Text style={{fontSize: 25, fontFamily: 'Lato'}}> "Shooting Time"</Text>
            <Text style={{left: 15, fontSize: 22, fontFamily: 'Lato-Bolditalic'}}>6-8 pm est</Text>
          </View>
        </View>
        

      </ImageBackground>
      
    )
}

export default Home