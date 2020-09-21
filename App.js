import React from 'react';
import Search from './component/Search';
import FilmItem from './component/FilmItem';
import { View,StyleSheet} from 'react-native';


export default function App() {
  return (
    <View style={Styles.view}>
      
      <Search/>
      <FilmItem/>
    </View>

  );
}


const Styles = StyleSheet.create(
  {

    view:{
      flex:1
    },
    FilmItem:{
      flex:2
    }
  
  
  }
)