import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView,Button, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('screen');

import {COLORS, icons, sunsetImages} from "../constants"
import faker from 'faker'
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

faker.seed(23);

const DATA = [...Array(5).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        location: faker.address.country()
    };
});


const DATA2 = [...Array(5).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: faker.image.avatar()
    };
});

let groupData = [
    {id: 1, name: "Montreal Sunset", image: require("../assets/images/california-sunset.jpg")},
    {id: 2, name: "Seoul Sunset", image: require("../assets/images/canada-sunset.jpg")},
    {id: 3, name: "Hong Kong Sunset", image: require("../assets/images/hongkong-sunset.jpg")},
    {id: 4, name: "Canada Sunset", image: require("../assets/images/montreal-sunset.jpg")},
    {id: 5, name: "California Sunset", image: require("../assets/images/seoul-sunset.jpg")}
]



function renderHeader({navigation}) {
    return (
        <View style={{position: 'absolute', bottom: 40, left: 5}}>
            <Icon.Button
              name="arrow-left"
              backgroundColor="#c7c9c8"
              onPress={()=> navigation.navigate("GroupScreen")}
              style={{width: 50, height: 50}}
              borderRadius={25}
              size={20}
              iconStyle={{marginLeft: 5}}
            ></Icon.Button>
        </View>
    )
}


const IndividualGroup =({navigation}) => {
    return (
            <View style={{flex: 1, backgroundColor: '#2f3030'}}>
                <View style={{marginTop: 5}}>
                    <FlatList 
                        data={DATA}
                        keyExtractor={item=>item.key}
                        renderItem={({item,index})=> {
                            return (
                                <View style={{marginTop: 12, flex: 1, marginLeft: 5}}>
                                    <TouchableOpacity style={{flexDirection: 'row', borderBottomColor: '#c3c9c5', borderBottomWidth: 0.2}}>
                                        <TouchableOpacity>
                                            <Image
                                                source={{uri: item.image}}
                                                style={{
                                                    width: 60, 
                                                    height: 60, 
                                                    borderRadius: 30, 
                                                    borderWidth: index==1 ? 3 : index==3 ? 3 : 0,
                                                    borderColor: '#f23427',
                                                    marginRight: 10
                                                }}
                                            />
                                        </TouchableOpacity>
                            
                                        <View style={{marginTop: 10}}>
                                            <Text style={{fontSize: 16, fontFamily: 'Lato-bold', color: '#ffff'}}>{item.name}</Text>
                                            <Text style={{fontSize: 14, fontFamily: 'Lato-light', opacity: .8, color: '#ffff'}}>{item.location}</Text>
                                        </View>
                                        
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    >
                    </FlatList>
                </View>
                
                <View style={{marginLeft: 5, marginTop: 35}}>
                    <FlatList 
                        data={groupData}
                        keyExtractor={item=>item.id}
                        horizontal={true}
                        renderItem={({item,index}) => {
                            return(
                                <View>
                                    <Image
                                        source={item.image}
                                        style={{width: 250, height: 250, borderRadius: 20, marginRight: 10, marginLeft: index == 0 ? 0 : 1}}
                                    />
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
    )
}


export default IndividualGroup