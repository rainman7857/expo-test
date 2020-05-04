import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AppContainer from './AppContainer'

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
