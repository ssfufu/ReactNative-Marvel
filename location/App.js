import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as axios from 'axios';
import AffichageTempToday from './Components/AfiichageTempToday';
import TempsVenir from './Components/TempsVenir';
import MicroInfo from './Components/MicroInfo';

const APIow = (lat,lon,temp)=> `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&temp=${temp}&appid=d52930891585b7e6723dbbc418c70c18&lang=fr&units=metric`;


export default function App() {
  const [localisation, setLocalisation] = useState(true);
  const [data, setData ] = useState(null);
  

  useEffect(() => {
    const GetLocalisation = async() =>{
      const {status} = await Location.requestForegroundPermissionsAsync();

      if(status !== "granted"){
        alert('Failed to access location');
        return
      }

      const maLocalisation = await Location.getCurrentPositionAsync()
      requeteVille(maLocalisation)
    }

    GetLocalisation()

  },[])

  const requeteVille = async(localisation) =>{
      const resultat = await axios.get(APIow(localisation.coords.latitude, localisation.coords.longitude))
      setData(resultat.data)
      setLocalisation(false)
  }


  if(localisation){
    return(
      <View style = {styles.container}>
        <Text>Erreur</Text>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <AffichageTempToday data={data}/>
      <TempsVenir data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgba(150,50,150,0.5)',
    padding: 0,
  },
});