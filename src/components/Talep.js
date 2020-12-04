import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Textarea,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Title,
  View,
} from 'native-base';
import {connect} from 'react-redux';
import {nameChanged, surnameChanged, textChanged,sendTalep} from '../actions';
class Talep extends Component {
  
  clickSend() {
    const {name, surname, text} = this.props;
    console.log(name + ' ' + surname + ' ' + text);
    this.props.sendTalep({name,surname,text})
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel style={{marginTop:10}} >
              <Label>İSİM</Label>
              <Input
                value={this.props.name}
                onChangeText={(name) => this.props.nameChanged(name)}
              />
            </Item>

            <Item floatingLabel style={{marginTop:10}}>
              <Label>SOYİSİM</Label>
              <Input
                value={this.props.surname}
                onChangeText={(surname) => this.props.surnameChanged(surname)}
              />
            </Item>
           
            <View style={{marginTop:20}}>
            <Textarea  rowSpan={5} bordered placeholder="Talep" 
            
              value={this.props.text}
              onChangeText={(text) => this.props.textChanged(text)}
              />
              </View>
            
          </Form>

          <Button
            onPress={this.clickSend.bind(this)}
            full
            style={{marginTop: 10}}>
            <Text>Gönder</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({talepResponse}) => {
  const {name, surname, text} = talepResponse;
  return {
    name,
    surname,
    text,
  };
};

export default connect(mapStateToProps, {
  nameChanged,
  surnameChanged,
  textChanged,
  sendTalep,
})(Talep);
