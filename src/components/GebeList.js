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
DATA = [
  {
    id: '1',
    title: 'Bebeğinizin Doğum Tarihi',
    aciklama:"",
    tip:"day",
    day: 280,
  },
  {
    id: '2',
    title: '4.Ay Aşısı TD1 ',
    aciklama:"",
    tip:"month",
    day: 4,
  },
  {
    id: '3',
    title: '5.ay aşısı TD2',
    aciklama:"",
    tip:"month",
    day: 5,
  },
  
  
];



class GebeList extends Component {
  monthCalculate = (add, date,tip) => {
    asiZamani = moment(date.day.dateString)
      .add(add, tip )
      .format('DD-MM-YYYY'); // for specific format
    return <Text style={{fontSize: 18, color: '#1F618D'}}>{asiZamani}</Text>;
  };
  render() {
    return (
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <View>
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail
                      style={{borderRadius: 10 / 2, width: 75, height: 85,marginTop:25}}
                      source={{
                        uri:
                          'https://www.inquirer.com/resizer/ezT4XoCZoMIWrB39YfyiMSFOyE4=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/ALC4PR3IRZGKFNXOPE5W5OEVP4.jpg',
                      }}
                    />
                  </Left>
                  <Body>
                    <Text
                      style={{
                        fontSize: 22,
                        color: '#D35400',
                        fontFamily: 'AppleSDGothicNeo-Bold',
                      }}>

                      {item.day === 280
                        ? 'Gebelik Sonu'
                        : 'Aşı vakti'}

                    </Text>
                    <Text style={{fontSize: 18, color: '#2980B9'}}>
                      {item.title}
                    </Text>

                    <Text>
                      {this.monthCalculate(item.day, this.props.route.params.dogumYili,item.tip)}
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

export default GebeList;
