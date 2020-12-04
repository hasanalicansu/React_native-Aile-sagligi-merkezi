import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Text,
  View,
  Spinner,
} from 'native-base';
import Calisma from './Calisma';
import {connect} from 'react-redux';
import {mesaiGet} from '../actions';
import _ from 'lodash';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Mesai extends Component {
  componentDidMount() {
    this.props.mesaiGet();
  }

  render() {
    return (
      
      <Container >
        <Tabs>
          <Tab heading={'ASM'}>
            <View style={{marginTop: 50}}>
              <View
                style={{margin: 10, backgroundColor: '#FFE5E2', elevation: 5}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    margin: 10,
                    fontSize: 20,
                    color: '#2E86C1',
                  }}>
                  CUMHURİYET ASM HAFTA İÇİ HER GÜN AÇIKTIR
                </Text>
              </View>
              <View
                style={{margin: 10, backgroundColor: '#FFE5E2', elevation: 5}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    textAlign: 'center',
                    margin: 10,
                    fontSize: 20,
                    color:"#2E86C1"
                  }}>
                  MESAİ SAATİNİ GÖRMEK İSTEDİĞİNİZ DOKTORU SEÇİNİZ
                </Text>
              </View>
            </View>
          </Tab>
          
          {_.map(this.props.data, (val) => {
            return (
              
              <Tab heading={'' + val.doktor} >
                <Calisma calismaBilgileri={val}></Calisma>
              </Tab>
              
            );
          })}
         
        </Tabs>
      </Container>
      
      
    );
  }
}

const mapStateToProps = ({mesaiResponse}) => {
  const data = _.map(mesaiResponse, (val, uid) => {
    return {...val, uid};
  });
  return {
    data,
  };
};

export default connect(mapStateToProps, {
  mesaiGet,
})(Mesai);
