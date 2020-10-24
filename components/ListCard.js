import {Card, ProgressBar} from 'react-native-paper';
import React from 'react';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text} from 'react-native';

function ListCard(props) {
  return (
    <Card style={styles.card} onPress={props.onPressed}>
      <ProgressBar progress={0.75} color="#FABB18" style={styles.progressbar} />
      <View style={styles.cardInterior}>
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
  );
}

const styles = StyleSheet.create({
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
  card: {
    marginLeft: 23,
    marginRight: 23,
    marginBottom: 10,
    borderRadius: 5,
  },
  progressbar: {
    borderRadius: 5,
  },
  bookmarkIcon: {
    margin: 10,
  },
});

export default ListCard;
