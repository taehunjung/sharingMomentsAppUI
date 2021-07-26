import * as React from 'react';
import { FlatList, Image, Text, View, Dimensions, StyleSheet, TouchableOpacity, SafeAreaViewBase, SafeAreaView,ImageBackground} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


function renderHeader() {
    return (
        <View style={{marginLeft: 15, top: 50, marginBottom: 20}}>
            <Text style={{fontSize: 35, fontFamily: 'IndieFlower'}}>Moments</Text>
        </View>
    )
}

const Group = ({navigation}) => {
    let groupData = [
        {id: 1, name: "CDNIS Friends", lastUpdate: "10:50am"},
        {id: 2, name: "McGill Friends", lastUpdate: "05:20pm"},
        {id: 3, name: "Jung's Family", lastUpdate: "04:20pm"},
        {id: 4, name: "FIS Bros", lastUpdate: "03:05am"}
    ]
    return (
       
        <ImageBackground source={require('../assets/images/groupbackground.jpg')} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <View style={{flex: 1}}>
            {renderHeader()}
            <View style={{marginTop: 40, marginLeft: 10}}>
                <FlatList 
                    data={groupData}
                    keyExtractor={item=>item.id}
                    renderItem={({item, index}) => {
                        return (
                            <View style={{marginTop: 40, flex: 1, marginLeft: 5}}>
                                <TouchableOpacity 
                                    style={{borderBottomColor: '#c3c9c5', borderBottomWidth: 0.2, flexDirection: 'row'}}
                                    onPress={index==0 ? ()=>{navigation.navigate("IndividualGroup")} : null}
                                >
                                    <Text style={{fontSize: 18, fontFamily: 'Lato-Bold', marginLeft: 30}}>{item.name}</Text>
                                    <View style={{position: 'absolute', right: 10, bottom: 5}}>
                                        <View style={{alignItems: 'center'}}>
                                            <Text style={{fontSize: 13, fontFamily: 'Lato-Light'}}>Latest Update:</Text>
                                            <Text style={{fontSize: 13, fontFamily: 'Lato-Light'}}>{item.lastUpdate}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>  
                        )
                    }}
                />
            </View>
            
        </View>
        </ImageBackground>
        
    )
}

export default Group