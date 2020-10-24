import Icon from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Menu, Provider, Card, FAB, Button} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
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
          closeOnDragDown="true"
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center',
            },
          }}>
          <Text>Random Text</Text>
        </RBSheet>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
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
