import {
    View,
    Text,
    Dimensions,
    SafeAreaView,
    ScrollView,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {Component} from 'react';
  
  (width = Dimensions.get('window').width),
    (height = Dimensions.get('window').height);
  
  class main extends Component {
    state = {
      friends: [1, 2, 3, 4],
      sayi: 0,
    };
    render() {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#E74C3C',}}>
          <ScrollView
            style={{
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
              maxWidth: width * 0.95,
              maxHeight: height*0.9,
              alignSelf: 'center',
              backgroundColor: '#fff',
              borderRadius: 13,
            }}>
            <View
              style={{
                marginTop: 22,
                backgroundColor: '#fff',
                flexDirection: 'row',
              }}>
              <FlatList
                horizontal
                data={this.state.friends}
                renderItem={({item}) => (
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginLeft: 10,
                      marginRight: 15,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#5FC0DF',
                        width: width*0.23,
                        height: width*0.23,
                        borderRadius: width*0.115,
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          marginTop: 5,
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            marginTop: 5,
                            fontSize: height*0.025,
                            fontWeight: '800',
                            fontFamily: 'AppleSDGothicNeo-Bold',
                          }}>
                          DR
                        </Text>
                        <Text
                          style={{
                            marginTop: 3,
                            fontFamily: 'AppleSDGothicNeo-SemiBold',
                            fontSize: height*0.02,
                          }}>
                          Hasan
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'AppleSDGothicNeo-SemiBold',
                            fontSize: height*0.02,
                          }}>
                          CANSU
                        </Text>
                      </View>
                    </View>
                    <View style={{marginTop: 7}}>
                      <Text
                        style={{
                          fontFamily: 'AppleSDGothicNeo-Light',
                          fontSize: height*0.018,
                        }}>
                        ÇALIŞIYOR
                      </Text>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
  
            <View style={{alignSelf: 'center', marginTop: 30}}>
              <Text
                style={{fontSize: height*0.04, fontFamily: 'AppleSDGothicNeo-Regular'}}>
                CUMHURİYET ASM
              </Text>
            </View>
  
            <View style={{marginTop: 15}}>
              <FlatList
                horizontal
                data={this.state.friends}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                      maxHeight: height * 0.1,
                      flexDirection: 'column',
                      backgroundColor: '#FAFAFA',
                      borderRadius: 7,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.23,
                      shadowRadius: 2.62,
                      elevation: 4,
                      padding: 20,
                      marginLeft: 20,
                      marginBottom: 15,
                    }}>
                    <View style={{maxWidth: width * 0.7}}>
                      <Text
                        numberOfLines={1}
                        style={{fontSize: 15, fontFamily: 'Arial-BoldMT'}}>
                        Başlık Başlık
                      </Text>
                    </View>
  
                    <View style={{marginTop: 5, maxWidth: width * 0.7}}>
                      <Text style={{fontSize: 15, fontWeight: '400'}}>
                        Metin metin metinmetin metin metmetin metMetin metin
                        metinmetin metin metmetin met
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
  
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginTop: 10,
                backgroundColor: '#153F8E',
                paddingHorizontal: 17,
                paddingVertical: 27,
                borderRadius: 13,
              }}>
              <View>
                <Text style={{fontSize: width * 0.085, color: '#fff'}}>
                  TAHLİL SONUÇLARI
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'column', marginTop: 15,marginHorizontal:width*0.07,marginBottom:25}}>
  
              <View style={{flexDirection: 'row',justifyContent:"space-between"}}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: '#0D6065',
                      borderRadius: 22.5,
                      alignItems: 'center',
                      marginLeft: 10,
                      marginBottom: -22.5,
                      zIndex: 2,
                    }}>
                    <Image
                      style={{width: 39, height: 39}}
                      source={require('../image/igne.png')}></Image>
                  </View>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,
                      elevation: 6,
                      borderRadius: 5,
                      backgroundColor: '#15878E',
                      width: 145,
                      height: 65,
                      alignItems: 'flex-end',
                    }}>
                    <View style={{maxWidth: 62, marginRight: 20, marginTop: 5}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '400',
                          color: '#fff',
                          textAlign: 'center',
                        }}>
                        AŞI TAKİBİ
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
  
                <TouchableOpacity>
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: '#0D6065',
                      borderRadius: 22.5,
                      alignItems: 'center',
                      padding:3,
                      marginLeft: 10,
                      marginBottom: -22.5,
                      zIndex: 2,
                    }}>
                    <Image
                      style={{width: 39, height: 39,borderRadius:19.5}}
                      source={require('../image/talep.png')}></Image>
                  </View>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,
                      elevation: 6,
                      borderRadius: 5,
                      backgroundColor: '#15878E',
                      width: 145,
                      height: 65,
                      alignItems: 'flex-end',
                    }}>
                    <View style={{maxWidth: 62, marginRight: 20, marginTop: 5}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '400',
                          color: '#fff',
                          
                        }}>
                        TALEP
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
  
              <View style={{flexDirection: 'row',justifyContent:"space-between", marginTop:20}}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: '#0D6065',
                      borderRadius: 22.5,
                      alignItems: 'center',
                      marginLeft: 10,
                      marginBottom: -22.5,
                      zIndex: 2,
                    }}>
                    <Image
                      style={{width: 39, height: 39}}
                      source={require('../image/pregnant.png')}></Image>
                  </View>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,
                      elevation: 6,
                      borderRadius: 5,
                      backgroundColor: '#15878E',
                      width: 145,
                      height: 65,
                      alignItems: 'flex-end',
                    }}>
                    <View style={{maxWidth: 62, marginRight: 20, marginTop: 5}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '400',
                          color: '#fff',
                          textAlign: 'center',
                        }}>
                        GEBE TAKİBİ
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
  
                <TouchableOpacity >
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: '#0D6065',
                      borderRadius: 22.5,
                      alignItems: 'center',
                      marginLeft: 10,
                      marginBottom: -22.5,
                      zIndex: 2,
                    }}>
                    <Image
                      style={{width: 39, height: 39}}
                      source={require('../image/tarti.png')}></Image>
                  </View>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,
                      elevation: 6,
                      borderRadius: 5,
                      backgroundColor: '#15878E',
                      width: 145,
                      height: 65,
                      alignItems: 'flex-end',
                    }}>
                    <View style={{minWidth: 62,maxWidth:80, marginRight: 20, marginTop: 5}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '400',
                          color: '#fff',
                          textAlign: 'center',
                        }}>
                        V/K İNDEKSİ
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
  
              <View style={{flexDirection: 'row',justifyContent:"space-between", marginTop:20}}>
                <TouchableOpacity>
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: '#0D6065',
                      borderRadius: 22.5,
                      alignItems: 'center',
                      marginLeft: 10,
                      marginBottom: -22.5,
                      zIndex: 2,
                    }}>
                    <Image
                      style={{width: 39, height: 39}}
                      source={require('../image/calendar.png')}></Image>
                  </View>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,
                      elevation: 6,
                      borderRadius: 5,
                      backgroundColor: '#15878E',
                      width: 145,
                      height: 65,
                      alignItems: 'flex-end',
                    }}>
                    <View style={{maxWidth: 62, marginRight: 20, marginTop: 5}}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: '400',
                          color: '#fff',
                          textAlign: 'center',
                        }}>
                        ESNEK MESAİ
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
  
                <TouchableOpacity >
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      backgroundColor: '#0D6065',
                      borderRadius: 22.5,
                      alignItems: 'center',
                      marginLeft: 10,
                      marginBottom: -22.5,
                      zIndex: 2,
                    }}>
                    <Image
                      style={{width: 39, height: 39}}
                      source={require('../image/notification.png')}></Image>
                  </View>
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,
                      elevation: 6,
                      borderRadius: 5,
                      backgroundColor: '#15878E',
                      width: 145,
                      height: 65,
                      alignItems: 'flex-end',
                    }}>
                    <View style={{ marginRight: 10, marginTop: 25}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '400',
                          color: '#fff',
                          textAlign: 'center',
                        }}>
                        BİLDİRİMLER
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
  
  
  
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    }
  }
  
  export default main;
  