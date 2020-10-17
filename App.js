/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Avatar, Accessory, Button} from 'react-native-elements';

const App: () => React$Node = () => {
  return (
    <>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.tabButtons}>
              <Button title="Active" type="clear" style={styles.Buttons} color="#FABB18"/>
              <Button title="Starred" type="clear" style={styles.Buttons} />
              <Button title="Personal" type="clear" style={styles.Buttons} />
              <Button title="Completed" type="clear" style={styles.Buttons}/>
              <Button title="Random" type="clear" style={styles.Buttons}/>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

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
  Buttons:{
    
    textDecorationColor: "#FABB18",
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
    marginLeft: 25,
    fontSize: 30,
    opacity: 0.9,
    fontWeight: 'bold',
  },
  lists: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
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

export default App;
