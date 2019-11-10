import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

export default class App extends React.Component {
  render(){ 
  return (
    <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require("./assets/img.jpg")}/>
          <Text style={{color:'white',paddingTop:20,}}>My Projects</Text>
        </View>

        <View style={styles.first}>
          <View style={styles.box}>
              <Text  style={styles.text}>HR</Text>
          </View>
          <View style={styles.box}>
              <Text  style={styles.text}>Finance</Text>
          </View>
        </View> 

        <View style={styles.first}>
          <View style={styles.box}>
              <Text  style={styles.text}>PM</Text>
          </View>
          <View style={styles.box}>
              <Text  style={styles.text}>UI/UX</Text>
          </View>
        </View>

        <View style={styles.first}>
          <View style={styles.box}>
              <Text  style={styles.text}>Teaching</Text>
          </View>
        </View>
     
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
    flexDirection:'column',
    paddingHorizontal:20,
    flex: 1,
  },
  image:{
    width:'100%',
    marginTop:40,
    marginLeft:20,
  },
  first:{ 
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    marginVertical:10, 
  },
  text:{
    color:'white',
    marginTop:70,
    marginLeft:10,
  },
  box:{
    backgroundColor:"#242132",
    width:"45%",
    height:130,
    borderRadius:7,
  }
});
