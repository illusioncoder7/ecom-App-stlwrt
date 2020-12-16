import React, { Component } from 'react';
import {TouchableOpacity, ActivityIndicator, FlatList, Text, View , Image, StyleSheet} from 'react-native';

export default class PostScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.book_array });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  renderItem=({ item })=> {
    let data={name:'mandil',title:item.book_title,book_author:item.author,imgSrc:item.image  };

    return(
      <View style={{flex:1, flexDirection:'row', marginBottom:10}}>
          <TouchableOpacity 
            
            onPress={()=> {
              this.props.navigation.navigate('DetailsScreen', data);
              
              }}
            >
            <Image style={{width:200, height:300, margin:5}}
              source={{uri: item.image}}
              />
            <View style={{flex:1,  justifyContent:'center', marginLeft:5}}>
              <Text style={{fontSize:18, color: 'green', marginBottom:15}}>
              {item.book_title}
              </Text>  
              <Text style={{fontSize:16, color:'red'}}>
                {item.author} 
              </Text>   
              {/* <TouchableOpacity onPress={()=> this.props.navigation.navigate('detailsScreen')}>
                <Text>Click me</Text>
              </TouchableOpacity> */}

            </View>
          </TouchableOpacity>
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

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1 ,alignItems:'center' }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ book_title }, index) => book_title}
            renderItem={ this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
          />
        )}
      </View>
    );
  }
};





