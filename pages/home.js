import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {FAB, Card, Button, ProgressBar} from 'react-native-paper';
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.tabButtons}>
                <Button
                  mode="text"
                  color="#FABB18"
                  onPress={() => console.log('Pressed')}>
                  Active
                </Button>
                <Button
                  mode="text"
                  color="#FABB18"
                  onPress={() => console.log('Pressed')}>
                  Starred
                </Button>
                <Button
                  mode="text"
                  color="#FABB18"
                  onPress={() => console.log('Pressed')}>
                  Personal
                </Button>
                <Button
                  mode="text"
                  color="#FABB18"
                  onPress={() => console.log('Pressed')}>
                  Completed
                </Button>
              </View>
            </ScrollView>
            <View>
              <Card style={styles.card}>
                <ProgressBar
                  progress={0.75}
                  color="#FABB18"
                  style={styles.progressbar}
                />
                <View style={styles.cardInterior}>
                  {/* <Card.Title title="Veggies Bitches!" subtitle="1 Day ago" /> */}
                  <View>
                    <Text style={styles.cardHeading}>Veggies Bitches!</Text>
                    <Text style={styles.cardHeadingSub}>2 Years ago</Text>
                  </View>
                  <Icon1
                    name="bookmark-outline"
                    size={25}
                    color="#FABB18"
                    style={styles.bookmarkIcon}
                  />
                </View>
              </Card>
              <Card style={styles.card}>
                <ProgressBar
                  progress={0.25}
                  color="#FABB18"
                  style={styles.progressbar}
                />
                <View style={styles.cardInterior}>
                  {/* <Card.Title title="Veggies Bitches!" subtitle="1 Day ago" /> */}
                  <View>
                    <Text style={styles.cardHeading}>Veggies Bitches!</Text>
                    <Text style={styles.cardHeadingSub}>2 Years ago</Text>
                  </View>
                  <Icon1
                    name="bookmark-outline"
                    size={25}
                    color="#FABB18"
                    style={styles.bookmarkIcon}
                  />
                </View>
              </Card>
              <Card style={styles.card}>
                <ProgressBar
                  progress={0.5}
                  color="#FABB18"
                  style={styles.progressbar}
                />
                <View style={styles.cardInterior}>
                  {/* <Card.Title title="Veggies Bitches!" subtitle="1 Day ago" /> */}
                  <View>
                    <Text style={styles.cardHeading}>Veggies Bitches!</Text>
                    <Text style={styles.cardHeadingSub}>2 Years ago</Text>
                  </View>
                  <Icon1
                    name="bookmark-outline"
                    size={25}
                    color="#FABB18"
                    style={styles.bookmarkIcon}
                  />
                </View>
              </Card>
              <Button
                mode="text"
                color="#D7D7D7"
                onPress={() => console.log('Pressed')}>
                View More
              </Button>
            </View>
            <View style={styles.lists}>
              <Text style={styles.listsText}>Groups</Text>
              <Icon name="plus" size={30} color="#FABB18" />
            </View>
            <View>
              <Card style={styles.card}>
                <ProgressBar
                  progress={0.75}
                  color="#FABB18"
                  style={styles.progressbar}
                />
                <View style={styles.cardInterior}>
                  {/* <Card.Title title="Veggies Bitches!" subtitle="1 Day ago" /> */}
                  <View>
                    <Text style={styles.cardHeading}>Wingies Yolo</Text>
                    <Text style={styles.cardHeadingSub}>10 Lists</Text>
                  </View>
                  <Icon
                    name="angle-right"
                    size={27}
                    color="#FABB18"
                    style={styles.bookmarkIcon}
                  />
                </View>
              </Card>
              <Card style={styles.card}>
                <ProgressBar
                  progress={0.25}
                  color="#FABB18"
                  style={styles.progressbar}
                />
                <View style={styles.cardInterior}>
                  {/* <Card.Title title="Veggies Bitches!" subtitle="1 Day ago" /> */}
                  <View>
                    <Text style={styles.cardHeading}>AtmaNirbhar NotCool</Text>
                    <Text style={styles.cardHeadingSub}>15 Lists</Text>
                  </View>
                  <Icon
                    name="angle-right"
                    size={27}
                    color="#FABB18"
                    style={styles.bookmarkIcon}
                  />
                </View>
              </Card>
              <Card style={styles.card}>
                <ProgressBar
                  progress={0.5}
                  color="#FABB18"
                  style={styles.progressbar}
                />
                <View style={styles.cardInterior}>
                  {/* <Card.Title title="Veggies Bitches!" subtitle="1 Day ago" /> */}
                  <View>
                    <Text style={styles.cardHeading}>App So Cool</Text>
                    <Text style={styles.cardHeadingSub}>5 Lists</Text>
                  </View>
                  <Icon
                    name="angle-right"
                    size={25}
                    color="#FABB18"
                    style={styles.bookmarkIcon}
                  />
                </View>
              </Card>
            </View>
          </ScrollView>
        </SafeAreaView>
        <FAB.Group
          open={this.state.open}
          icon={'plus'}
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
          theme={{colors: {accent: '#FABB18'}}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  progressbar: {
    borderRadius: 5,
  },
  card: {
    marginLeft: 23,
    marginRight: 23,
    marginBottom: 10,
    borderRadius: 5,
  },
  bookmarkIcon: {
    margin: 10,
  },
  cardHeading: {
    fontSize: 20,
    fontWeight: '700',
    margin: 10,
    marginBottom: 5,
  },
  cardHeadingSub: {
    marginLeft: 10,
    opacity: 0.5,
    fontSize: 12,
    marginBottom: 10,
  },
  cardInterior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
