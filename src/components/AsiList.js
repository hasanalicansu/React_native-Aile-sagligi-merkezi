import React, {Component} from 'react';

import moment from 'moment';

import {View, FlatList} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

DATAasi = [
  {
    id: '1',
    title: 'Hepatit-B 1. Aşı',
    month: 0,
  },
  {
    id: '2',
    title: 'Hepatit-B 2. Aşı',
    month: 1,
  },
  {
    id: '3',
    title: 'BCG 1. Aşı, DaBT - İPA - Hib 1. Aşı, KPA 1. Aşı',
    month: 2,
  },
  {
    id: '4',
    title: 'DaBT - İPA - Hib 2. Aşı, KPA 2. Aşı',
    month: 4,
  },
  {
    id: '5',
    title: 'Hepatit-B 3. Aşı, DaBT - İPA - Hib 3. Aşı, OPA 1. Aşı',
    month: 6,
  },
  {
    id: '6',
    title: 'KPA Pekiştirme Aşısı, KKK 1. Aşı, Su Çiçeği Aşısı',
    month: 12,
  },
  {
    id: '7',
    title: 'DaBT - İPA - Hib Pekiştirme Aşısı, OPA 2. Aşı, Hepatit-A 1. Aşı',
    month: 18,
  },
  {
    id: '8',
    title: 'Hepatit-A 2. Aşı',
    month: 24,
  },
];



class AsiList extends Component {
  monthCalculate = (add, date) => {
    asiZamani = moment(date.day.dateString)
      .add(add, 'month')
      .format('DD-MM-YYYY'); // for specific format
    return <Text style={{fontSize: 18, color: '#1F618D'}}>{asiZamani}</Text>;
  };
  render() {
    return (
      <FlatList
        data={DATAasi}
        renderItem={({item}) => (
          
          <View>
           
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail
                      style={{borderRadius: 35 / 2, width: 70, height: 80}}
                      source={{
                        uri:
                          'https://gumlet.assettype.com/nationalherald%2F2020-06%2F27038fbb-38ce-4974-a815-4e7d6106da5b%2F10.jpg?rect=0%2C77%2C1200%2C675&auto=format%2Ccompress&format=webp&q=70&w=750&dpr=1.3',
                      }}
                    />
                  </Left>
                  <Body>
                    <Text
                      style={{
                        fontSize: 22,
                        color: '#D35400',
                        fontFamily: 'AppleSDGothicNeo-SemiBold',
                      }}>
                      {item.month === 0
                        ? 'Doğum Aşısı'
                        : item.month + '. Ay Aşısı'}
                    </Text>
                    <Text style={{fontSize: 18, color: '#2980B9'}}>
                      {item.title}
                    </Text>
                        
                    <Text>
                      {this.monthCalculate(item.month, this.props.route.params.dogumYili)}
                    </Text>
                  </Body>
                </ListItem>
              </List>
            </Content>
          </View>
        )}
        keyExtractor={(item) => item.id}></FlatList>
    );
  }
}

export default AsiList;
