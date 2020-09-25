import React from 'react'
import {View,Text, StyleSheet,Image} from 'react-native'


class FilmItem extends React.Component {

    
    render () {
        
        return (    
            <View style={styles.main_container}>
                <Image
                        style={styles.image}
                        source={{uri: "image"}} />
                <View style={styles.content}>
                    <View style={styles.head}>
        <Text style={styles.title_text}>{this.props.film == undefined ? "" : this.props.film.title}</Text>
                        <Text style={styles.title_text}> {this.props.film == undefined ? "" : this.props.film.vote_average} </Text>
                    </View>
                    <View style={styles.desc_container}>
                        <Text numberOfLines={6}>{this.props.film == undefined ? "" : this.props.film.overview} </Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date}>
                            Sorti le {this.props.film == undefined ? "" : this.props.film.realase_date} 
                        </Text>
                    </View>
                </View>
            </View> 
            
        )
    }
}


const styles = StyleSheet.create({
    head:{
        flex:1,
        flexDirection:'row'
    },
    main_container: {
      flexDirection:"row"
    },
    title_text: {
        color: 'grey',
        flexDirection:'row',
        margin:5
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
      },
    content:{
        flex:1,
        flexDirection:'column'
    },
    date: {
        textAlign:'right',
        
    },
    date_container:{
        flex:1
    },

    desc_container:{
        flex:7
    }
  })
  

export default FilmItem