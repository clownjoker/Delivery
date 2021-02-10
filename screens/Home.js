import React from 'react';
import {View,Text,Modal,StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      show:false,
      titleFootr:'off line',
    }
    this.navigation = this.props.navigation;
  }
  render(){
    return(
      <View style={styles.container}>

        {/* //using map her */}
        <View style={styles.mapWrapper}>
          {/* the btn goo wrapper  */}
          <TouchableOpacity onPress={()=>{this.setState({show:true})}} style={styles.btnGoWrapper}> 
            <View style={styles.btnGoContent}>
              <View style={styles.btnChild}>
                <Text style={styles.btnTitle}>Go</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* show mode */}
          <Modal transparent visible={this.state.show}>
            <View style={{backgroundColor:'#000000aa',flex:1}}>
              <View style={styles.model}>
                  <Text style={styles.titleListRequest}>List of requests </Text>
                  <ScrollView style={{marginTop:3}}>
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
                      {/* //////////////// */}
                      <View style={styles.itemOfListRequest}>
                        <Image style={styles.imageRequest}/>
                        <View style={{marginTop:10,marginLeft:10}}>
                          {/* using like this name:{test} test comeing from data */}
                          <Text style={styles.itemRequest}>Name:test</Text>
                          <Text style={styles.itemRequest}>Price:000</Text>
                          <Text style={styles.itemRequest}>Number:3</Text>                     
                        </View>
                      </View>
                      {/* //////////////// */}
                      <View style={styles.itemOfListRequest}>
                        <Image style={styles.imageRequest}/>
                        <View style={{marginTop:10,marginLeft:10}}>
                          {/* using like this name:{test} test comeing from data */}
                          <Text style={styles.itemRequest}>Name:test</Text>
                          <Text style={styles.itemRequest}>Price:000</Text>
                          <Text style={styles.itemRequest}>Number:3</Text>                     
                        </View>
                      </View>
                      {/* //////////////// */}
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
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('details')}>
                        <Text style={styles.seeAllRequest}>See All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
                        <Text style={styles.seeAllRequest}>Hide Request</Text>
                    </TouchableOpacity>
                  </View>
              </View>                               
            </View>
          </Modal>
          {/* end the map use it view  */}
        </View>
        {/* the footer */}
        <View style={styles.footerWrapper}>
          <View style={styles.footer}>
            <MaterialCommunityIcons name='menu-down' size={30} color='#fff'/>
                <Text style={styles.titleFootr}>
                    {this.state.titleFootr}
                </Text>
            <MaterialCommunityIcons name='menu' size={30} color='#fff'/>           
          </View>
        </View>
      </View> 
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  mapWrapper:{
    backgroundColor:'#ddd',
    flex:1,
    position:'relative',
    justifyContent:'flex-end'
  },
  btnGoWrapper:{
    alignItems:'center',
    marginBottom:25,
  },
  btnGoContent:{
    backgroundColor:'#2E77AE',
    width:70,
    height:70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:35,
    
  },
  btnChild:{
    width:59,
    height:59,
    borderRadius:59,
    borderColor:'#fff',
    borderWidth:1,
    backgroundColor:'#2E77AE',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTitle:{
    fontFamily:'Cairo-SemiBold',
    fontSize:18,
    color:'#fff'
  },
  model:{
    backgroundColor:'#fff',
    marginTop:50,
    marginHorizontal:30,
    padding:10,
    borderRadius:10,
    height:300
  },
  titleListRequest:{
    fontSize:16,
    alignSelf:'center',
    fontFamily:'Cairo-SemiBold',
    fontWeight:'bold'
  },
  itemOfListRequest:{
    backgroundColor:'rgb(236, 242, 249)',
    width:'100%',
    height:80,
    marginBottom:2,
    borderBottomWidth:1,
    borderColor:'#2E77AE',
    flexDirection:'row',
    marginVertical:5,
    marginHorizontal:5,
    marginTop: 5
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
  seeAllRequest:{
    paddingTop:5,
    fontSize:16,
    fontFamily:'Cairo-SemiBold',
    fontWeight:'bold'
  },
  footerWrapper:{
    // width:'100%',
    height:56,
    backgroundColor:'#2E77AE',
    borderTopWidth:1,
    borderColor:'#fff',
    justifyContent:'center' 
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-around'  
  },
  titleFootr:{
    color:'#fff',
    fontSize:22,
    fontFamily:'Cairo-SemiBold',
  }
})
