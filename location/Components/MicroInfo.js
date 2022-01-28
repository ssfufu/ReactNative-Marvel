import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, Headers, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';


const iconeMeteo = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export default function MicroInfo({resultat}){
  return(
      
    <View style={styles.contenu}>
      <Text style = {styles.nom}>{resultat.name} </Text>
      <Text>{resultat.temp}°C</Text>
      <Text>{resultat.hour}H</Text>
      <Image source={{uri: iconeMeteo(resultat.icon)}} style={{width: 50, height: 50,}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  contenu:{
  },

  nom:{
    fontSize: 20,
  }

})