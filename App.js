
import React from 'react';

import {
  View,
  Text, 
  TouchableOpacity, 
  Image
} from 'react-native';


import {NavigationContainer, StackActions} from "@react-navigation/native"

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack';
import {Home, IndividualGroup, CameraScreen, Group, Playlists, UserInfo} from './screens'



const HomeStack = createStackNavigator()

function GroupStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Group"
      screenOptions={{headerShown: false}}
    >
      <HomeStack.Screen name="GroupScreen" component={Group} 
      />
      <HomeStack.Screen name="IndividualGroup" component={IndividualGroup} 
         options={{headerShown: true, title: 'CDNIS Friends', 
         headerBackTitle: " ",  headerStyle: {
          backgroundColor: '#dcdee0'},  headerTitleStyle: {
            fontWeight: 'bold', fontFamily: 'Lato'
          }, headerTintColor: '#1a1919'}}
      />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
    
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions = {{
          showLabel: false,
          style: {
            position: 'absolute', 
            bottom: 13,
            left: 15,
            right: 15,
            elevation: 0,
            backgroundColor: '#ffff',
            borderRadius: 15,
            height: 52,
            opacity: 0.8
          }
        }}
        
      >
      
        <Tab.Screen name="GroupScreen" component={GroupStackScreen} 
          options={{
            tabBarLabel: 'Groups',
            tabBarIcon: ({focused}) => (
              <View style={{bottom: -15, alignItems: 'center'}}>
                <Image 
                  source={require('./assets/icons/group.png')}
                  resizeMode='contain'
                  style={{
                    width: 30,
                    height: 30, 
                    tintColor: focused ? '#eb1202' : '#2e2e2d'
                  }}
                />
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text
                     style={{fontFamily: 'Lato-Bold', fontSize: 13, color: focused ? '#eb1202' : '#2e2e2d'}}
                  >Groups</Text>
                </View>
              </View>
            )
          }}
        />

          <Tab.Screen name="Playlist" component={Playlists}
          options={{
            tabBarLabel: 'Playlist',
            tabBarIcon: ({focused}) => (
              <View style={{bottom: -14, alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                  source={require('./assets/icons/headphones.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 30, 
                    tintColor: focused ? '#eb1202' : '#2e2e2d'
                  }}
                />
                <View>
                  <Text
                     style={{fontFamily: 'Lato-Bold', fontSize: 13, color: focused ? '#eb1202' : '#2e2e2d'}}
                  >Playlists</Text>
                </View>
              </View>
            )
          }}
        />

        <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <View style={{bottom: -15, alignItems: 'center'}}>
                <Image 
                  source={require('./assets/icons/home.png')}
                  resizeMode='contain'
                  style={{
                    width: 28,
                    height: 26, 
                    tintColor: focused ? '#eb1202' : '#2e2e2d'
                  }}
                />
                <View style={{top: 5, alignItems: 'center', justifyContent: 'center'}}>
                  <Text
                     style={{fontFamily: 'Lato-Bold', fontSize: 13, color: focused ? '#eb1202' : '#2e2e2d'}}
                  >Home</Text>
                </View>
              </View>
            )
          }}
        />
    
        <Tab.Screen name="CamScreen" component={CameraScreen}
          options={{
            tabBarLabel: 'Groups',
            tabBarIcon: ({focused}) => (
              <View style={{bottom: -14, alignItems: 'center', justifyContent: 'center'}}>
                <Image 
                  source={require('./assets/icons/camera.png')}
                  resizeMode='contain'
                  style={{
                    width: 25,
                    height: 30, 
                    tintColor: focused ? '#eb1202' : '#2e2e2d'
                  }}
                />
                <View>
                  <Text
                     style={{fontFamily: 'Lato-Bold', fontSize: 13, color: focused ? '#eb1202' : '#2e2e2d'}}
                  >Moments</Text>
                </View>
              </View>
            )
          }}
          />

        <Tab.Screen name="UserInfo" component={UserInfo}
          options={{
            tabBarLabel: 'UserInfo',
            tabBarIcon: ({focused}) => (
              <View style={{bottom: -14, alignItems: 'center', justifyContent: 'center'}}>
                
                  <Image 
                    source={require('./assets/icons/profile-user.png')}
                    resizeMode='contain'
                    style={{
                      width: focused? 35 : 30,
                      height: focused? 35: 30, 
                      tintColor: focused ? '#eb1202' : '#2e2e2d'
                    }}
                  />
                
              </View>
            )
          }}
          />
      </Tab.Navigator>


    </NavigationContainer>
  )
}

export default App;

/*
<NavigationContainer>
<Stack.Navigator initialRouteName="Home" headerMode="none">
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="GroupScreen" component={Group} />
  <Stack.Screen name="GroupsScreen" component={IndividualGroup} />
  <Stack.Screen name="CamScreen" component={CameraScreen} />
</Stack.Navigator>
</NavigationContainer>
*/