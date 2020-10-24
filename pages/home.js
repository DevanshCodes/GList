import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from 'react';
import {FAB, Button} from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Avatar} from 'react-native-elements';
import ListCard from '../components/ListCard';
import GroupCard from '../components/GroupCard';
import TabButtons from '../components/TabButtons';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  onStateChange = (open) => {
    this.setState({open: open});
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.profileMain}>
              <Avatar
                style={styles.profileAvatar}
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
              <Text style={styles.profileText}>Hello Rajneesh!</Text>
            </View>
            <Text style={styles.text2}>You've got 8 lists active!</Text>
            <View style={styles.lists}>
              <Text style={styles.listsText}>Lists</Text>
              <Icon name="long-arrow-right" size={30} color="#FABB18" />
            </View>
            <TabButtons />
            <View>
              <ListCard />
              <ListCard />
              <ListCard />
              <Button
                mode="text"
                color="#D7D7D7"
                onPress={() => this.props.navigation.navigate('Lists')}>
                View More
              </Button>
            </View>
            <View style={styles.lists}>
              <Text style={styles.listsText}>Groups</Text>
              <Icon name="plus" size={30} color="#FABB18" />
            </View>
            <View>
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </View>
          </ScrollView>
        </SafeAreaView>
        <FAB.Group
          open={this.state.open}
          icon={'plus'}
          theme={{colors: {accent: '#FABB18'}}}
          actions={[
            {
              icon: 'star',
              label: 'Group',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'email',
              label: 'List',
              onPress: () => console.log('Pressed email'),
            },
          ]}
          onStateChange={() => this.onStateChange(!this.state.open)}
          onPress={() => {
            if (this.state.open) {
              // do something if the speed dial is open
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  profileMain: {
    flexDirection: 'row',
    margin: 30,
    marginLeft: 20,
    marginRight: 0,
  },
  profileAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: 'white',
  },
  tabButtons: {
    overflow: 'hidden',
    margin: 20,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  floatingButton: {
    color: '#FABB18',
    backgroundColor: '#FABB18',
  },
  Buttons: {
    textDecorationColor: '#FABB18',
  },
  profileText: {
    marginTop: 13,
    marginLeft: 13,
    fontSize: 17,
    opacity: 0.6,
    fontWeight: 'bold',
  },
  text2: {
    width: 170,
    marginLeft: 23,
    fontSize: 30,
    opacity: 0.9,
    fontWeight: 'bold',
  },
  lists: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 23,
    marginBottom: 10,
  },
  listsText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default Home;
