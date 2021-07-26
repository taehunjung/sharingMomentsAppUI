import React from 'react';

import {
  View,
  Text, 
  TouchableOpacity, 
  Image
} from 'react-native';

function renderLogOutButton() {
  return (
    <View style={{position: 'absolute', bottom: 79, left: '37%'}}>
      <TouchableOpacity style={{backgroundColor: '#f72537', height: 45, width: 120, borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 13}}>
          <Text style={{color: '#ffff', fontFamily: 'Lato-bold', fontSize: 16 }}> SIGN OUT </Text>
      </TouchableOpacity>
    </View>
  )
}
const UserInfo = () => {
    return (
        <View style={{flex: 1, backgroundColor:'#2f3030'}}>
          <View style={{top: 50, left: 20}}>
            <Text style={{fontFamily: 'IndieFlower', fontSize: 35, color: '#ffff'}}>Moments</Text>
          </View>
          <View style={{top:60, left: 20, flexDirection: 'row', borderBottomColor: '#b0afae', borderBottomWidth: 0.3}}>
            <Image 
              source={require("../assets/images/profile.jpg")}
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                borderColor: '#1c1a1a',
                borderWidth: 3, 
                bottom: 4
              }}
            />
            
            <View style={{flexDirection: 'column', left: 10}}>
              <Text style={{fontFamily: 'lato-bold', fontSize: 18, color: '#ffff'}}>Username</Text>
              <Text style={{fontFamily: 'lato-light', fontSize: 15, color: '#ffff'}}>robjung98</Text>
              <Text style={{fontFamily: 'lato-bold', fontSize: 18, color: '#ffff'}}>Bio</Text>
              <Text style={{fontFamily: 'lato-light', fontSize: 15, color: '#ffff'}}>McGill class of 2023 | "Do what excites"</Text>
            </View>
          </View>

            <View style={{top: 80, left: 20, borderBottomColor: '#b0afae', borderBottomWidth: 0.3, height: 120}}>
              <Text style={{fontFamily: 'lato-bold', fontSize: 18, color: '#ffff'}}>Friends</Text>
              <TouchableOpacity style={{backgroundColor: '#cacccb', width: '87%', height: 35, top: 10, borderRadius: 5, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', left: 10}}>
                  <Image source={require("../assets/icons/add-user.png")}
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{fontFamily: 'lato-regular', fontSize: 15, left: 20}}>Add Friends</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{top: 15, backgroundColor: '#cacccb', height: 35, justifyContent: 'center', borderRadius: 5, width: '87%'}}>
                <View style={{flexDirection: 'row', left: 10}}>
                  <Image source={require("../assets/icons/friends.png")}
                    style={{width: 20, height: 20}}
                  />
                  <Text style={{fontFamily: 'lato-regular', fontSize: 15, left: 20}}>My Friends</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* spotify account connect */}

            <View style={{top: 95, left: 20}}>
              <Text style={{fontFamily: 'lato-bold', fontSize: 18, color: '#ffff'}}>Spotify Account</Text>
              <TouchableOpacity style={{backgroundColor: '#cacccb', width: '87%', height: 45, top: 10, borderRadius: 5, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', left: 10, alignItems: 'center'}}>
                  <Image source={require("../assets/icons/spotify-logo.png")}
                    style={{width: 30, height: 30}}
                  />
                  <Text style={{fontFamily: 'lato-regular', fontSize: 16, left: 20}}>Connect Spotify Account</Text>
                </View>
              </TouchableOpacity>

            </View>

            {renderLogOutButton()}
        </View>
    )
}

export default UserInfo