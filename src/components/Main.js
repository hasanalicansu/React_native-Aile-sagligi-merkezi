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
  Alert,
  Modal,
  StyleSheet,
  Linking,
} from 'react-native';
import React, {Component} from 'react';

import {Spinner} from 'native-base';

import _ from 'lodash';
import {connect} from 'react-redux';
import {calisanGet,bildirimGet} from '../actions';

(width = Dimensions.get('window').width),
  (height = Dimensions.get('window').height);

class Main extends Component {
  state = {
    friends: [1, 2, 3, 4],
    sayi: 0,
    modalVisible: false,
  };

  componentDidMount() {
    this.props.calisanGet();
    this.props.bildirimGet();
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Sadece TC Kimlik Numarası, Ad ve Soyad Yeterlidi
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableHighlight
                  style={{
                    ...styles.openButton,
                    backgroundColor: '#235A53',
                    marginRight: 25,
                  }}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                    Linking.openURL(
                      'http://212.174.232.94:15346/AlisSonuc/hastasonuc_hasta.aspx',
                    );
                  }}>
                  <Text style={styles.textStyle}>Sayfaya Git</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{...styles.openButton, backgroundColor: '#4A235A'}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Geri Dön</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        {this.props.calisanlar.length!==0? <ScrollView
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
            maxWidth: width * 1,
            maxHeight: height * 1,
            alignSelf: 'center',
            backgroundColor: '#fff',
            borderRadius: 13,
          }}>
          <View
            style={{
              marginTop: 22,

              flexDirection: 'row',
            }}>
            <FlatList
              horizontal
              data={this.props.calisanlar}
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
                      backgroundColor: '#197379',
                      width: width * 0.23,
                      height: width * 0.23,
                      borderRadius: width * 0.01,
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
                          fontSize: height * 0.022,
                          fontWeight: '800',
                          fontFamily: 'AppleSDGothicNeo-Bold',
                          color: '#fff',
                        }}>
                        {' '}
                        {item.unvan}{' '}
                      </Text>
                      <Text
                        style={{
                          marginTop: 3,
                          fontFamily: 'AppleSDGothicNeo-SemiBold',
                          fontSize: height * 0.02,
                          color: '#fff',
                        }}>
                        {' '}
                        {item.isim}{' '}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'AppleSDGothicNeo-SemiBold',
                          fontSize: height * 0.02,
                          color: '#fff',
                          textAlign:"center"
                        }}>
                        {' '}
                        {item.soyisim}{' '}
                      </Text>
                    </View>
                  </View>
                  <View style={{marginTop: 7}}>
                  {item.durum == 1? <Text
                      style={{
                        fontFamily: 'AppleSDGothicNeo-Light',
                        fontSize: height * 0.018,
                      }}>
                        ÇALIŞIYOR
                    </Text>: <Text
                      style={{
                        fontFamily: 'AppleSDGothicNeo-Light',
                        fontSize: height * 0.018,
                        color:"#A93226"
                      }}>
                        İZİNLİ
                    </Text>}
                    
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          <View
            style={{
              alignSelf: 'center',
              marginTop: 30,
              shadowColor: '#6a2c70',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,
              elevation: 4,
            }}>
            <Text
              style={{
                fontSize: height * 0.04,
                fontFamily: 'AppleSDGothicNeo-Bold',
                color: '#0E0641',
              }}>
              CUMHURİYET ASM
            </Text>
          </View>

          <View style={{marginTop: 15}}>
            <FlatList
              horizontal
              data={this.props.bildirimlerim2}
              renderItem={({item}) => (
                <View>
                {item.show==1? <TouchableOpacity
                 onPress={()=>this.props.navigation.navigate("allBildirim")}
                  style={{
                    maxHeight: height * 0.12,
                    flexDirection: 'column',
                    backgroundColor: '#FCEDDA',
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
                      style={{
                        fontSize: 15,
                        fontFamily: 'Arial-BoldMT',
                        color: '#0E0641',
                      }}>
                      {item.baslik}{' '}
                    </Text>
                  </View>

                  <View style={{marginTop: 5, maxWidth: width * 0.7}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: '#0E0641',
                      }}>
                      {item.text}{' '}
                    </Text>
                  </View>
                </TouchableOpacity>:null}
                </View>
                
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.setModalVisible(true)}
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
          <View
            style={{
              flexDirection: 'column',
              marginTop: 15,
              marginHorizontal: width * 0.07,
              marginBottom: 20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("asiGiris",{aciklama: "Lütfen çocuğunuzun doğum tarihini seçini",tip:"asi"})}
              >
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

              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("talep")}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: '#0D6065',
                    borderRadius: 22.5,
                    alignItems: 'center',
                    padding: 3,
                    marginLeft: 10,
                    marginBottom: -22.5,
                    zIndex: 2,
                  }}>
                  <Image
                    style={{width: 39, height: 39, borderRadius: 19.5}}
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

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
               onPress={()=>this.props.navigation.navigate("asiGiris",{aciklama: "Lütfen son adet tarihini seçini",tip:"gebe"})}>
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

              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("indeksGiris")}>
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
                  <View
                    style={{
                      minWidth: 62,
                      maxWidth: 80,
                      marginRight: 20,
                      marginTop: 5,
                    }}>
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

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("mesai")}>
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

              <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("allBildirim")}>
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
                  <View style={{marginRight: 10, marginTop: 25}}>
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
      :<Spinner></Spinner>}
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#A93226',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
});

const mapStateToProps = ({calisanResponse,bidirimResponse}) => {
  const calisanlar = _.map(calisanResponse, (val, uid) => {
    return {...val, uid};
  });
  const bildirimlerim = _.map(bidirimResponse, (val, uid) => {
    return {...val, uid};
  });

  const bildirimlerim2 = _.reverse(bildirimlerim)
  return {calisanlar,bildirimlerim2};
};

export default connect(mapStateToProps, {calisanGet,bildirimGet})(Main);
