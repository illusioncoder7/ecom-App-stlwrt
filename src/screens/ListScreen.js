import React from 'react';
import {View , Text, StyleSheet, FlatList} from 'react-native';

const ListScreen=() =>{
    const friends =[
        {name: 'Gopal',age:'12'},
        {name: 'Hari',age:'12'},
        {name: 'Gita',age:'12'},
        {name: 'Bikash',age:'12'},
        {name: 'sonita',age:'12'},
        {name: 'dhoni',age:'12'},
        {name: 'Reit',age:'12'},
        {name: 'Gopals',age:'12'},
        {name: 'Haris',age:'12'},
        {name: 'Gitas',age:'12'},
        {name: 'Bikashs',age:'12'},
        {name: 'sonitas',age:'12'},
        {name: 'dhonis',age:'12'},
        {name: 'Reits',age:'12'},
    ]
    return(
        <FlatList 
        //horizontal={true}// scrolling horizontally, vertical is default in app design
        //showsHorizontalScrollIndicator={false} //disabling horizontal scroll bar indicator
        keyExtractor={friends => friends.name}
        data={friends}
        renderItem={({ item }) => { //element ==={ item:{name:'friend'},index:0}
            //destructrng element
            return(
            <Text style={styles.textStyle}> {item.name} - Age {item.age}</Text>
            );
        }}
        />
    );
}

const styles= StyleSheet.create({
    textStyle:{
        marginVertical:20,
    }
});

export default ListScreen;