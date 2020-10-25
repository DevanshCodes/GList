import Icon from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {ScrollView} from 'react-native-gesture-handler';
import {Menu, Provider, Card, FAB, TextInput} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      language: '',
    };
    this.sheetRef = React.createRef();
  }
  toggleMenu = (open) => {
    this.setState({openMenu: open});
  };
  onStateChange = (open) => {
    this.setState({open: open});
  };

  render() {
    return (
      <>
        <Provider>
          <View style={styles.main}>
            <View style={styles.head}>
              <Icon
                name="ios-arrow-back-outline"
                size={32}
                color="#FABB18"
                onPress={() => this.props.navigation.goBack()}
              />
              <Text style={styles.TextHead}>Veggies Bitches</Text>
              <Menu
                visible={this.state.openMenu}
                onDismiss={() => this.toggleMenu(!this.state.openMenu)}
                anchor={
                  <Icon
                    name="ios-ellipsis-vertical-sharp"
                    size={32}
                    color="#FABB18"
                    onPress={() => this.toggleMenu(!this.state.openMenu)}
                  />
                }>
                <Menu.Item onPress={() => {}} title="Hemant" />
                <Menu.Item onPress={() => {}} title="Sucks" />
                <Menu.Item onPress={() => {}} title="Rajneesh" />
              </Menu>
            </View>
            <ScrollView>
              <Card style={styles.card}>
                <View style={styles.cardView}>
                  <Text style={styles.cardHeading}>Maggi Mast Masala</Text>
                  <Text style={styles.cardHeadingSub}>x1 Packet</Text>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardView}>
                  <Text style={styles.cardHeading}>Maggi Mast Masala</Text>
                  <Text style={styles.cardHeadingSub}>x1 Packet</Text>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardView}>
                  <Text style={styles.cardHeading}>Maggi Mast Masala</Text>
                  <Text style={styles.cardHeadingSub}>x1 Packet</Text>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardView}>
                  <Text style={styles.cardHeading}>Maggi Mast Masala</Text>
                  <Text style={styles.cardHeadingSub}>x1 Packet</Text>
                </View>
              </Card>
              <Card style={styles.card}>
                <View style={styles.cardView}>
                  <Text style={styles.cardHeading}>Maggi Mast Masala</Text>
                  <Text style={styles.cardHeadingSub}>x1 Packet</Text>
                </View>
              </Card>
            </ScrollView>
          </View>
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => this.sheetRef.open()}
            theme={{colors: {accent: '#FABB18'}}}
          />
        </Provider>
        <RBSheet
          ref={(ref) => {
            this.sheetRef = ref;
          }}
          height={300}
          closeOnDragDown={true}
          openDuration={250}
          customStyles={{}}>
          <View>
            <TextInput
              theme={{colors: {primary: '#FABB18'}}}
              dense="true"
              underlineColor="transparent"
              style={styles.productInput}
              label="Product Name"
              // value={text}
              // onChangeText={(text) => setText(text)}
            />
            <TextInput
              theme={{colors: {primary: '#FABB18'}}}
              dense="true"
              underlineColor="transparent"
              style={styles.productInput}
              label="Price"
              // value={text}
              // onChangeText={(text) => setText(text)}
            />
            <Picker
              style={styles.pickerStyle}
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Packer" value="java" />
              <Picker.Item label="Kg" value="js" />
            </Picker>
            <Text></Text>
          </View>
        </RBSheet>
      </>
    );
  }
}

const styles = StyleSheet.create({
  pickerStyle: {
    padding: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  productInput: {
    margin: 20,
    color: '#FABB18',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginTop: 30,
  },
  main: {
    flex: 1,
  },
  TextHead: {
    fontSize: 30,
    fontWeight: '700',
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: '700',
  },
  cardHeadingSub: {
    opacity: 0.5,
    fontSize: 12,
  },
  cardInterior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    marginTop: 5,
    borderLeftWidth: 8,
    borderLeftColor: '#FABB18',
    marginLeft: 23,
    marginRight: 23,
    marginBottom: 10,
    borderRadius: 5,
  },
  cardView: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Items;
