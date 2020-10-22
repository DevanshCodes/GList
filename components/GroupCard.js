import {Card, ProgressBar} from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, Text} from 'react-native';

function GroupCard(props) {
  return (
    <Card style={styles.card}>
      <ProgressBar progress={0.75} color="#FABB18" style={styles.progressbar} />
      <View style={styles.cardInterior}>
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

export default GroupCard;
