import React, {Component} from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {asiTakvimChanged, sendTarih} from '../actions';

import {Alert} from 'react-native';

class AsiGiris extends Component {
  state = {
    secilenGun: 'Gün',
    secilenAy: 'Ay',
    secilenYil: 'Yıl',
  };

  asiClickSend() {
    const {tip} = this.props.route.params;
    if (
      this.state.secilenGun === 'Gün' ||
      this.state.secilenAy === 'Ay' ||
      this.state.secilenYil === 'Yıl'
    ) {
      Alert.alert(
        'BOŞ ALAN',
        'Lütfen bir tarih seçiniz',
        [{text: 'OK', onPress: () => null}],
        {cancelable: false},
      );
    } else {
      if (tip === 'asi') {
        
        this.props.navigation.navigate("asiList",{dogumYili:this.props.day})
        
      } else if (tip === 'gebe') {
       
        this.props.navigation.navigate("gebeList",{dogumYili:this.props.day})
        
      }
      
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        {console.log("aaac",this.props.route.params.tip)}
      <ScrollView>
        <View>
          <View style={{height: 370}}>
            <Calendar
              monthFormat={'dd MM yyyy '}
              onDayPress={(day) => {
                this.props.asiTakvimChanged({
                  day,
                });
                this.setState({secilenGun: day.day});
                this.setState({secilenAy: day.month});
                this.setState({secilenYil: day.year});
              }}
            />
          </View>
          <Text
            style={{
              color: '#CB4335',
              marginTop: 5,
              fontSize: 20,
              alignSelf: 'center',
            }}>
            {this.props.route.params.aciklama}
          </Text>
          <Text
            style={{
              color: '#3498DB',
              marginTop: 10,
              fontSize: 25,
              alignSelf: 'center',
            }}>
            {this.state.secilenGun +
              '/' +
              this.state.secilenAy +
              '/' +
              this.state.secilenYil}
          </Text>

          <Button
            onPress={this.asiClickSend.bind(this)}
            full
            style={{marginTop: 20}}>
            <Text style={{fontSize: 25, color: '#ECF0F1'}}>HESAPLA</Text>
          </Button>
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({asiResponse}) => {
  const {day} = asiResponse;
  return {
    day,
  };
};

export default connect(mapStateToProps, {
  asiTakvimChanged,
  sendTarih,
})(AsiGiris);
