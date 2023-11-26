import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const PageDrawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StudentInfoScreen />
      <StatusBar style="auto" />
    </View>
  );
}

function StudentInfoScreen() {
  <Text>Open up App.tsx to start working on your app!</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
