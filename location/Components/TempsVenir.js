import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Image, Headers, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {format} from 'date-fns';
import {fr} from 'date-fns/locale';
import MicroInfo from './MicroInfo.js';

const iconeMeteo = (icon) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export default function TempsVenir({data}){
  const [lesJours, setLesJours]=useState([])
  
  useEffect(() => {
    const affichageDesJours = data.list.map(i=>{
      const dt = new Date(i.dt*1000)
      return({
        hour: dt.getHours(), 
        temp: Math.round(i.main.temp), 
        icon: i.weather[0].icon, 
        name: format(dt, "EEEE")
      })
    })
    setLesJours(affichageDesJours)
  },[data])

  return(
    <ScrollView horizontal>{lesJours.map(i=>(
      <MicroInfo resultat={i}/>
    ))}</ScrollView>
  )
}

