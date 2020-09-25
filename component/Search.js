import React from 'react'
import { StyleSheet, View,Button,TextInput,FlatList,Text} from 'react-native'
import FilmItem from './FilmItem'
import films from '../Helpers/film_data'



class Search extends React.Component {
    

    render(){
        return (
            <View style={styles.main_container}>
                <TextInput placeholder="Titre du film" style={styles.TextInput}></TextInput>
                <Button title="Rechercher" onPress={() => {}}></Button>
                
            <FlatList
                 data={films}
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={({item}) =>  <FilmItem film={item}/>}
/>
         </View>

        )
    }
}



const styles = StyleSheet.create({

    main_container : {
        marginTop:50
    },


    TextInput: {marginLeft: 5, 
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5 
    
    },
    list:{
        marginLeft:20,
        marginTop:20
        
    }
})



export default Search;