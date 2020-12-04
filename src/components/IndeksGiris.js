import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Text,
  View,
  Button,
} from 'native-base';

class IndeksGiris extends Component {
  state = {
    display: false,
    kilo: 0,
    boy: 0,
    indeks: 0,
  };

  kitleMath = () => {
    return (
      <View>
        <View style={{alignSelf: 'center', marginTop: 25}}>
          <View
            style={{
              marginTop: 15,
              backgroundColor: '#85C1E9',
              borderRadius: 5 / 2,
              paddingLeft: 30,
              paddingRight: 30,
            }}>
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                alignSelf: 'center',
                fontSize: 20,
                color: 'white',
              }}>
              {this.state.indeks.toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={{alignSelf: 'center', marginTop: 10}}>
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#BB8FCE',
              borderRadius: 5 / 2,
              paddingLeft: 15,
              paddingRight: 15,
            }}>
            
              {this.state.indeks <= 18.49 ? (
                <Text style={{
                  marginBottom: 20,
                  marginTop: 20,
                  alignSelf: 'center',
                  fontSize: 25,
                  color: 'white',
                }}>İdeal Kilonun altındasınız</Text>
              ) : this.state.indeks > 18.49 && this.state.indeks < 24.49 ? (
                <Text style={{
                  marginBottom: 20,
                  marginTop: 20,
                  alignSelf: 'center',
                  fontSize: 30,
                  color: 'white',
                }}>İdeal Kilodasınız</Text>
              ) : this.state.indeks > 24.99 && this.state.indeks <= 29.99 ? (
                <Text style={{
                  marginBottom: 20,
                  marginTop: 20,
                  alignSelf: 'center',
                  fontSize: 25,
                  color: 'white',
                }}>İdeal Kilonuzun üstündesiniz</Text>
              ) :  this.state.indeks > 29.99 ? <Text style={{
                marginBottom: 20,
                marginTop: 20,
                alignSelf: 'center',
                fontSize: 25,
                color: 'white',
              }}>İdeal Kilonuzun çok üzerindesiniz</Text>: null }
              
           
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Container>
        <Content>
          <Text
            style={{
              color: '#2BA6D5',
              marginTop: 5,
              fontSize: 25,
              alignSelf: 'center',
            }}>
            Kilonuzu ve Boyunuzu Giriniz
          </Text>

          <View
            style={{
              marginTop: 15,
              marginLeft: 1,
              marginRight: 1,
              height: 100,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View>
              <Item
                style={{
                  alignSelf: 'flex-start',
                  width: 150,
                  marginTop: 10,
                  marginRight: 15,
                }}
                rounded>
                <Input
                  onChangeText={(kilo) => this.setState({kilo})}
                  keyboardType={'numeric'}
                  placeholder="Kilonuzu Giriniz"
                />
              </Item>
            </View>

            <View>
              <Item
                style={{
                  alignSelf: 'flex-end',
                  width: 150,
                  marginTop: 10,
                }}
                rounded>
                <Input
                  onChangeText={(boy) => this.setState({boy})}
                  keyboardType={'numeric'}
                  placeholder="Boyunuzu Giriniz"
                />
              </Item>
            </View>
          </View>
          <Button
            onPress={() => {
              this.setState({display: true});
              this.setState({
                indeks:
                  (this.state.kilo * 10000) / (this.state.boy * this.state.boy),
              });
            }}
            full
            style={{marginTop: 10}}>
            <Text>Hesapla</Text>
          </Button>

          <View style={{alignSelf: 'center', marginTop: 25}}>
            {this.state.display === true ? (
              <View>{this.kitleMath()}</View>
            ) : (
              <Text></Text>
            )}
          </View>
        </Content>
      </Container>
    );
  }
}

export default IndeksGiris;
