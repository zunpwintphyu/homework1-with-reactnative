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
          <View style={{backgroundColor:"#242132", width:140, height:120,borderRadius:7,}}>
              <Text  style={styles.text}>HR</Text>
          </View>
          <View style={{backgroundColor:"#242132", width:140, height:120,borderRadius:7,marginLeft:20,}}>
              <Text  style={styles.text}>Finance</Text>
          </View>
        </View> 

        <View style={styles.second}>
          <View style={{backgroundColor:"#242132", width:140, height:120,borderRadius:7,}}>
              <Text  style={styles.text}>PM</Text>
          </View>
          <View style={{backgroundColor:"#242132", width:140, height:120,marginLeft:20,borderRadius:7,}}>
              <Text  style={styles.text}>UI/UX</Text>
          </View>
        </View>

        <View style={styles.third}>
          <View style={{backgroundColor:"#242132", width:140, height:120,borderRadius:7,}}>
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
    marginTop:25,
    flex: 1,
  },
  image:{
    marginTop:'20%',
    marginLeft:'11%',
  },
  first:{ 
    marginLeft:'10%',
    marginTop:'20%',
    marginBottom:'25%',
    flexDirection:'row',
    alignItems:"center",
    flex: .2,
  },
  second:{  
    marginLeft:'10%',
    marginBottom:'25%',
    flexDirection:'row',
    alignItems:"center",
    flex: .2,
  },
  third:{
    marginLeft:'10%',
    marginBottom:'25%',
    flexDirection:'row',  
    alignItems:"center",
    flex: .1,
  },
  text:{
    color:'white',
    marginTop:'58%',
    marginLeft:'15%',
  },
});
