import * as React from 'react';

import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView,Button, ImageBackground } from 'react-native';


let groupData = [
    {id: 1, name: "CDNIS Friends", image: require("../assets/images/album1.png")},
    {id: 2, name: "McGill Friends", image: require("../assets/images/album2.jpg")},
    {id: 3, name: "Jung's Family", image: require("../assets/images/album3.jpg")},
    {id: 4, name: "FIS Fam", image: require("../assets/images/album4.jpg")}
]



const Playlists = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#2f3030'}}>
            <View style={{position: 'absolute', top: 65, left: 20}}>
                <Text style={{fontSize: 23, fontFamily: 'Lato-LightItalic', color: '#ffff'}}>Playlists</Text>
            </View>
            <View style={{top: 120, left: 10}}>
                <View style={{bottom: 12}}>
                    <Text style={{fontSize: 18, fontFamily: 'Lato-bold', color: '#ffff'}}>  Albums of the Week</Text>
                </View>
                
                <View style={{borderWidth: 0.3, borderBottomColor: '#6e6d6d', paddingBottom: 20}}>
                    <FlatList 
                        data={groupData}
                        keyExtractor={item=>item.id}
                        horizontal={true}
                        renderItem={({item,index}) => {
                            return(
                                    <View style={{marginRight: 10}}>
                                        <Image
                                            source={item.image}
                                            style={{width: 250, height: 250, borderRadius: 20}}
                                        />
                                        <View style={{position: 'absolute', bottom: 20, right: 15}}>
                                            <Text style={{fontSize: 15, color: '#ffff', fontFamily: 'Lato-Bold'}}>{item.name}</Text>
                                        </View>
                                    </View>
                                )
                        }}
                    />
                </View>


                <View style={{top: 15, left: 5, flexDirection: 'column'}}>
                    <Text style={{fontSize: 18, fontFamily: 'Lato-Bold', color: 'white'}}>Listening Now</Text>
                    <View style={{flexDirection: 'row', top: 12}}>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/images/album1.png")}
                                style={{width: 70, height: 70, borderRadius: 35}}
                            />
                        </TouchableOpacity>
                        <View style={{flexDirection: 'column', left: 20, top: 10}}>
                            <Text style={{fontFamily: 'Lato-BoldItalic', color: '#ffff', fontSize: 16}}>Peaches - Justin Bieber</Text>
                            <Text style={{color: '#ffff', fontFamily: 'Lato-Light', fontSize: 15, left: 5}}>Played by Nicholas Lee</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', top: 20}}>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/images/album3.jpg")}
                                style={{width: 70, height: 70, borderRadius: 35}}
                            />
                        </TouchableOpacity>
                        <View style={{flexDirection: 'column', left: 20, top: 10}}>
                            <Text style={{fontFamily: 'Lato-BoldItalic', color: '#ffff', fontSize: 16}}>Ylang Ylang - FKJ</Text>
                            <Text style={{color: '#ffff', fontFamily: 'Lato-Light', fontSize: 15, left: 5}}>Played by Robert Jung</Text>
                        </View>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Playlists