import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

function TabButtons(props) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
  );
}

const styles = StyleSheet.create({
  tabButtons: {
    overflow: 'hidden',
    margin: 20,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TabButtons;
