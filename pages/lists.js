import Icon from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TabButtons from '../components/TabButtons';
import ListCard from '../components/ListCard';
import {ScrollView} from 'react-native-gesture-handler';
import {Menu, Button, Provider} from 'react-native-paper';

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    };
  }
  toggleMenu = (open) => {
    this.setState({openMenu: open});
  };

  render() {
    return (
      <Provider>
        <View style={styles.main}>
          <View style={styles.head}>
            <Icon
              name="ios-arrow-back-outline"
              size={32}
              color="#FABB18"
              onPress={() => this.props.navigation.goBack()}
            />
            <Text style={styles.TextHead}>My Lists</Text>

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
          <View style={styles.tabbuttons}>
            <TabButtons />
          </View>
          <ScrollView>
            <ListCard
              onPressed={() => this.props.navigation.navigate('Items')}
            />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </ScrollView>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
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
  tabbuttons: {
    marginTop: 15,
  },
});

export default Lists;
