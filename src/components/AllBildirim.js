import React, { Component } from 'react'

import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {bildirimGet} from '../actions';
import _ from 'lodash';
import { Spinner } from 'native-base';


class AllBildirim extends Component {
    componentDidMount() {
        this.props.bildirimGet();
      }
      render() {
        return (
          <SafeAreaView style={{flex:1}}>
          
            {this.props.bildirimlerim2.length!==0 ? <FlatList
              data={this.props.bildirimlerim2}
              renderItem={({item}) => (
                  <View>
                      {item.show==1 ? <View style={{marginTop:10,marginBottom:15,marginHorizontal:30,alignContent:"center",elevation:10,backgroundColor:"#FFE9E9",padding:10,borderRadius:20/2}}>
                  <Text style={{fontFamily:"AppleSDGothicNeo-Bold",color:"#F90D0D",fontSize:15}}>{item.baslik} </Text>
                  <Text  style={{fontWeight:"500",color:"#2874A6",fontSize:13}}>{item.text} </Text>
                </View> : null}
                
                </View>
              )}
              keyExtractor={(item) => item.id}
            /> : <Spinner></Spinner>}
           
          
          </SafeAreaView>
        );
      }
}


const mapStateToProps = ({bidirimResponse}) => {
    const bildirimlerim = _.map(bidirimResponse, (val, uid) => {
      return {...val, uid};
    });

    const bildirimlerim2=_.reverse(bildirimlerim);
    return {bildirimlerim2};
  };
  
  export default connect(mapStateToProps, {bildirimGet})(AllBildirim);
