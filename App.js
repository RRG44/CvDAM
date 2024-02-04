import { StatusBar } from 'expo-status-bar';
import { FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style = {styles.cover}>
          <ImageBackground source={require("./assets/qro.jpg")} style = {styles.imageCover} resizeMode = 'stretch'>
            <View>
              <Text style = {styles.h1}>Hello, I'm Gerardo</Text>
              <Text style = {styles.h2}>Mobile Developer</Text>
            </View>
          </ImageBackground>
        </View>
        <View style = {styles.contentContainer}>
          <View>
            <Text style = {[styles.h3, {textAlign : 'center'}]}>About Me</Text>
            <View style = {[{alignItems : 'center'}]}>
              <Image source = {require("./assets/me.jpg")} style = {styles.imageMe}/>
            </View>
            <Text style = {styles.txt}> Hi! I'm Gerardo. I'm a full stack and mobile developer. Currently studying Software Engineer in the Autonomus University of Queretaro.
            {"\n"}I'm someone who is really pasionate about learning and reading new things. I enjoy a big variety of topics but computer science, languages, hard sciences and finance are among my favourites. I also enyoing listening and playing music.</Text>
          </View>
          <ListTech />            
          <ListLang />
          <ListSoftSk />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const ListLang = ( ) => {
  const data = [
    { key: ["Spanish 🇲🇽", "#095f44", "Native"] },
    { key: ["English 🇺🇸", "#cf2335", "B2"] },
    { key: ["French 🇫🇷", "#0a4f8f", "A1"] },
    { key: ["Italian 🇮🇹", "#088042", "A1"] },
  ];

  return (
    <View>
      <Text style = {styles.h3}>Languages</Text>
      {data.map((item, index) => (
        <Text key = {index} style = {[styles.txt, { color: item.key[1] }]}>
          <Text style = {[{fontWeight : 'bold'}]}>{'    '}• {item.key[2]} </Text>{item.key[0]}
        </Text>
      ))}
    </View>
  );
};

const ListTech = () => {
  return(
    <View>
      <Text style = {styles.h3}>Techs</Text>
      <Text style = {styles.txt}>{'    '}• Java, JavaScript, Python, C++ and C#</Text>
      <Text style = {styles.txt}>{'    '}• Web: HTML, CSS, PHP and Bootstrap</Text>
      <Text style = {styles.txt}>{'    '}• MySQL, PL/SQL and Access</Text>
      <Text style = {styles.txt}>{'    '}• Git and GitHub</Text>
      <Text style = {styles.txt}>{'    '}• Xampp</Text>
      <Text style = {styles.txt}>{'    '}• React Native</Text>
    </View>
  );
}

const ListSoftSk = () => {
  return(
    <View>
      <Text style = {styles.h3}>Soft Skills</Text>
      <Text style = {styles.txt}>{'    '}• Proactivo</Text>
      <Text style = {styles.txt}>{'    '}• Curioso y con ganas de aprender</Text>
      <Text style = {styles.txt}>{'    '}• Trabajo en equipo</Text>
      <Text style = {styles.txt}>{'    '}• Resilencia</Text>
      <Text style = {styles.txt}>{'    '}• Me adapto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 0,
    margin : 0,
    width : '100%',
  },
  cover : {
    flex: 1,
    width : '100%',
    height : 300,
    justifyContent : 'center',
    alignItems: 'center',
    padding : 0,
    margin : 0,
  },
  imageCover : {
    flex: 1,
    width : '100%',
    justifyContent : 'center',
    alignItems: 'center',
    padding : 0,
    margin : 0,
  },
  imageMe : {
    height : 200,
    width : 200,
    borderRadius : 100,
    marginVertical : 20,
  }
  ,
  contentContainer : {
    padding : 25,
  }
  ,
  h1 : {
    fontSize : 40,
    fontWeight : "bold",
    color : "#fff",
    textAlign : 'center', 
  },
  h2 : {
    fontSize : 16,
    fontWeight : "bold",
    color : "#fff",
    textAlign : 'center',
  },
  h3 : {
    fontSize : 24,
    fontWeight : "bold",
    color : "#000",
    paddingVertical : 10,
  },
  txt : {
    fontSize : 16,
    fontWeight : "normal",
    color : "#000",
    lineHeight : 30,
  }
});

export default App;
