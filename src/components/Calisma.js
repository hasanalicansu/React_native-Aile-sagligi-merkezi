import React, {Component} from 'react';
import {Text, View, Spinner} from 'native-base';
import {StyleSheet, ScrollView, Linking, TouchableOpacity, SafeAreaView} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';

class Calisma extends Component {
  state = {
    tableHead: ['PZRTS', 'SALI', 'ÇARŞ', 'PERŞ', 'CUM'],
    tableData: [
      [
      ],
      [
      ],
    ],
  };

  componentDidMount(){
    this.setState({  tableData: [
      [
        this.props.calismaBilgileri.pazartesiSabah,
        this.props.calismaBilgileri.saliSabah,
        this.props.calismaBilgileri.carsambaSabah,
        this.props.calismaBilgileri.persembeSabah,
        this.props.calismaBilgileri.cumaSabah,
      ],
      [
        this.props.calismaBilgileri.pazartesiAkşam,
        this.props.calismaBilgileri.saliAkşam,
        this.props.calismaBilgileri.carsambaAkşam,
        this.props.calismaBilgileri.persembeAkşam,
        this.props.calismaBilgileri.cumaAkşam,
      ],
    ]})
  }

  render() {
    return (
      
      <ScrollView >
        {this.props.calismaBilgileri.length!=0? <View>
          <View>
            <Text style={styles.telefon}>{this.props.calismaBilgileri.doktor}</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`tel:${this.props.calismaBilgileri.telefon}`)
              }>
              <Text style={styles.telefon2}>
                {' '}
                {this.props.calismaBilgileri.telefon}{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row
                data={this.state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={this.state.tableData} textStyle={styles.text2} />
            </Table>
          </View>
        </View>:<Spinner></Spinner>}
      </ScrollView>
      
    );
  }
}
export default Calisma;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  telefon: {fontSize: 25, margin: 2, alignSelf: 'center', color: '#148F77'},
  telefon2: {fontSize: 20, margin: 2, alignSelf: 'center', color: '#1ABC9C'},
  text: {fontSize: 15, margin: 10, alignSelf: 'center', color: '#F92F2F'},
  text2: {
    fontSize: 13,
    marginVertical: 10,
    marginHorizontal: 1,
    alignSelf: 'center',
  },
});
