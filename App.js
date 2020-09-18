import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Search from './component/Search';
import filmitem from './component/FilmItem'
import FilmsItem from './component/FilmItem';
import { View } from 'react-native';


export default function App() {
  return (
    <View>
      
      <Search/>
      
      <FilmsItem/>
    </View>

  );
}