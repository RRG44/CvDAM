import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image ></Image>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const listLang = props => {
  return (
    <FlatList
    data = {[
      { key : ["Spanish 🇲🇽", "#095f44"]},
      { key : ["English 🇺🇸", "#cf2335"]},
      { key : ["French 🇫🇷", "#0a4f8f"]},
      { key : ["Italian 🇮🇹", "#088042"]},
    ]}
    renderItem={
      ({item}) => {
        <Text style = {[styles.txt, { color: item.key[1] }]}>{item.key[0]}</Text>
      }
    }
  />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical : 60,
  },
  h1 : {
    fontSize : 40,
    fontWeight : "bold",
  },
  h2 : {
    fontSize : 32,
    fontWeight : "bold",
  },
  h3 : {
    fontSize : 28,
    fontWeight : "bold",
  },
  txt : {
    fontSize : 28,
    fontWeight : "normal",
  }
});

export default App;
