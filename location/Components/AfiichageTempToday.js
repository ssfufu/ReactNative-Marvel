import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, Headers, } from 'react-native';
import Constants from 'expo-constants';

const iconeMeteo = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`


//useEffect, useState, package date-fns
//dans l'api, dt = date actuelle

function AffichageTempToday({data}){
  
  return(
    <>
      
      <Text style = {styles.h1}>
          wow il fé moche
      </Text>
      <Text style = {styles.texte}>{data?.city?.name}</Text>
      <Text style = {styles.texte}>{Math.floor(data?.list[0]?.main?.temp)}°C</Text>
      <Text style = {styles.texte}>{data?.list[0]?.weather[0]?.description}</Text>
      <Image
        source={{ uri: iconeMeteo(data?.list[0]?.weather[0].icon)}}
        style={styles.image}
      />
    </>
)
}

const styles = StyleSheet.create({
  //mettre les styles
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(150,50,150,0.5)',
    padding: 0,
  },

  texte:{
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 25,
    textTransform: 'capitalize',
  },

  header:{
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(100,100,100,0.8)',
    textAlign: 'center',
    
  },

  h1:{
    fontSize: 20,
    fontFamily: 'monospace',
  },

  image:{
    width: 150,
    height: 150
  }
})

export default AffichageTempToday

/* Faire un tableau qui donne la météo pour les 5 prochaines jours en bas de la météo du jour*/