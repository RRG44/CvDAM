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
          <Text style = {[styles.h3, {textAlign : 'center'}]}>About Me</Text>
          <View style = {[{alignItems : 'center'}]}>
            <Image source = {require("./assets/me.jpg")} style = {styles.imageMe}/>
          </View>
          <Text style = {styles.txt}>¡Hola! Mi nombre es Gerardo Ramírez y soy desarrollador full stack y desarrollador móvil. Actualmente estoy formándome como profesional en la carrera de Ingeniería en Software.
          {"\n"}A parte de mi carrera soy apasionado a aprender cosas y leer sobre varios temas, entre mis favoritos están los idiomas, la ciencia, las finanzas e inversiones, pero sobre todo la música (practico guitarra, bajo, teclado y tengo una manía por crear playlists para todo, así como por escuchar y descubrir nueva música). También me encanta cocinar, sobre todo galletas, panes o pasteles. Cada semana planeo mis comidas junto con mis rutinas para cuidar mi salud. Me gustan más los gatos que los perros. Y mi serie favorita de todos los tiempos es Malcom in the middle. Me encanta estar con mis amigos y familia, ya sea hablando, pasándola bien, en un concierto o jugando cartas o algún otro juego.
          </Text>
          <ListTech />            
          <ListLang />
          <Text style = {styles.h3}>Soft Skills</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const ListLang = ( ) => {
  const data = [
    { key: ["Spanish 🇲🇽", "#095f44"] },
    { key: ["English 🇺🇸", "#cf2335"] },
    { key: ["French 🇫🇷", "#0a4f8f"] },
    { key: ["Italian 🇮🇹", "#088042"] },
  ];

  return (
    <View>
      <Text style = {styles.h3}>Languages</Text>
      {data.map((item) => (
        <Text style={[styles.txt, { color: item.key[1] }]}>
          {'    '}• {item.key[0]}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 0,
  },
  cover : {
    flex: 1,
    width : '100%',
    height : 300,
    justifyContent : 'center',
    alignItems: 'center',
  },
  imageCover : {
    flex: 1,
    width : '100%',
    justifyContent : 'center',
    alignItems: 'center',
  },
  imageMe : {
    height : 200,
    width : 200,
    borderRadius : 100,
  }
  ,
  contentContainer : {
    padding : 10,
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
    paddingVertical : 10,
  }
});

export default App;
