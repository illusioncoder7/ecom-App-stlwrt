import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, FlatList, Text, View, StyleSheet } from 'react-native';

class PostScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      isLoading : true,
      shop_data: [],
    }
  }

  renderItem=({ item })=> {
    return(
      <View style={{flex:1, flexDirection:'row', marginBottom:3}}>
        <Image style={{width:100, height:100, margin:5}}
          source={{urr: item.image}}
          />
        <View style={{flex:1,  justifyContent:'center', marginLeft:5}}>
          <Text style={{fontSize:18, color: 'green', marginBottom:15}}>
          {item.book_title}
          </Text>  
          <Text style={{fontSize:16, color:'red'}}>
            {item.author} 
          </Text>      
        </View>
      </View>
    )

  }
  renderSeparator=() =>{
    return(
      <View 
        style={{height:1, width:'100%', backgroundColor:'black'}}>

      </View>
    )
  }

  componentDidMount(){
    const url='http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
    return(
      fetch('url')
        .then(response => response.json())
        .then(responseData =>{
          this.setState({
            isLoading:false,
            shop_data: responseData.book_array,
          });
        })
        .catch( (error) =>{
            console.log(error)
        })
    )

  }

  render(){
    return(
      this.state.isLoading ? 
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size='large' color='#330066' animating />
      </View>
      :
      <View style={styles.container}>
      <FlatList
        data={this.state.shop_data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={this.renderSeparator}
      />
    </View>
    )
    
     
  }
}
const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: "center",
  },
  item:{
    flex:1,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "center",
    justifyContent: 'center',
    borderBottomColor:'#eee',
    borderRightWidth:1,
    
  }
})

export default PostScreen;