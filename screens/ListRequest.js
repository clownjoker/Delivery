import React from 'react';
import {View,Text,ScrollView,StyleSheet,Image} from 'react-native';

const ListRequest = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={{padding:5}}>
                    <View style={styles.itemOfListRequest}>
                        <Image style={styles.imageRequest}/>
                        <View style={{marginTop:10,marginLeft:10}}>
                            {/* using like this name:{test} test comeing from data */}
                            <Text style={styles.itemRequest}>Name:test</Text>
                            <Text style={styles.itemRequest}>Price:000</Text>
                            <Text style={styles.itemRequest}>Number:3</Text>                     
                        </View>
                    </View>

                    <View style={styles.itemOfListRequest}>
                        <Image style={styles.imageRequest}/>
                        <View style={{marginTop:10,marginLeft:10}}>
                            {/* using like this name:{test} test comeing from data */}
                            <Text style={styles.itemRequest}>Name:test</Text>
                            <Text style={styles.itemRequest}>Price:000</Text>
                            <Text style={styles.itemRequest}>Number:3</Text>                     
                        </View>
                    </View>

                    <View style={styles.itemOfListRequest}>
                        <Image style={styles.imageRequest}/>
                        <View style={{marginTop:10,marginLeft:10}}>
                            {/* using like this name:{test} test comeing from data */}
                            <Text style={styles.itemRequest}>Name:test</Text>
                            <Text style={styles.itemRequest}>Price:000</Text>
                            <Text style={styles.itemRequest}>Number:3</Text>                     
                        </View>
                    </View>

                    <View style={styles.itemOfListRequest}>
                        <Image style={styles.imageRequest}/>
                        <View style={{marginTop:10,marginLeft:10}}>
                            {/* using like this name:{test} test comeing from data */}
                            <Text style={styles.itemRequest}>Name:test</Text>
                            <Text style={styles.itemRequest}>Price:000</Text>
                            <Text style={styles.itemRequest}>Number:3</Text>                     
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    itemOfListRequest:{
        backgroundColor:'rgb(236, 242, 249)',
        width:'100%',
        height:80,
        marginBottom:2,
        borderBottomWidth:1,
        borderColor:'#2E77AE',
        flexDirection:'row',
        marginTop:5  
      },
      itemRequest:{
        fontSize:14,
        fontFamily:'Cairo-SemiBold',
        marginTop:-2
      },
      imageRequest:{
        width:60,
        height:60,
        backgroundColor:'#000',
        borderRadius:60,
        marginTop:10,
        marginLeft:10
      },
})
export default ListRequest;