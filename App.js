import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';

export default function App() {
  return (
    <ScrollView> <View style={styles.container}>
      <View> <Text style={styles.heading}>Curriculum Vitae</Text></View>
      <View> <Image source={require("../my-project/image/aa.jpg")} style={{ width: 100, height: 100, borderRadius: 100, }} /> </View>
      <View> <Text>I am a MERN Stack Developer</Text></View>
      <View>
        <View style={styles.qualification}> <br /> Qualification</View>
        <FlatList
          data={[
            { key: "Matric In 2014" },
            { key: "Intermediate in 2016" },
            { key: "English Course from Eureka in 2016" },

          ]}

          renderItem={({ item }) => <Text style={styles.item1}>{item.key}</Text>}
        />
      </View>
     

      <View>
        <View style={styles.qualification}> <br/>Skills</View>
        <FlatList
          data={[
            { key: "HTML" },
            { key: "CSS" },
            { key: "JAVASCRIPT" },
            { key: "REACT" },
            { key: "REACT NATIVE" },
            { key: "MONGODB" },
            { key: "EXPRESS" },
            { key: "NODE JS" },
          ]}

          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>



      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {

  },

  heading: {
    fontWeight: 'bold',
    fontSize: 25,

  },
  qualification: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  item1: {
    justifyContent: "center",
    flex: 1
  }








});
