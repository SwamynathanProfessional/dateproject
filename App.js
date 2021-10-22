import * as React from 'react';
import SplashScreen from 'react-native-splash-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, TouchableOpacity, Text,TextInput, Image} from 'react-native';
function App() {
  const [video, setvideo] = useState(false);
  const [camera, setcamera] = useState(false);
  const [mic, setmic] = useState(true);
  const [idno, setidno] = useState(0);
  const [add, setAdd] = useState(false);
  var content;
  var array = [
    {name: 'Call'},
    { name: 'Chat'},
    {name: 'Catalog'},
  ];

  if (idno === 0) {
    //call
    content =
    <> 
    <View style={{justifyContent:'space-evenly',alignItems:'center', position: 'relative', top: 20}}>
<View  style={{width: '100%', height: '46%', backgroundColor: 'grey'}} >
 

</View>
<View style={{width: '70%', height: '44%', backgroundColor: 'grey'}}>

</View>

    </View>



    <TouchableOpacity 
onPress={()=>{
 setidno(1);
}}  style={styles.callcircle} >
 
          <MaterialCommunityIcons
            name= 'message'
            style={{alignSelf:'center'}}
            size={25}
            color={'white'}
             
          />
   </TouchableOpacity> 
 

<TouchableOpacity style={styles.roundshape}>
          <MaterialCommunityIcons
            name="phone-hangup-outline"
            size={30}
            color={'white'}
            style={{alignSelf:'center'}}
          />
          </TouchableOpacity>
              
<View style={styles.BottomTabConatiner}>
<View style={styles.boundshape}>
<TouchableOpacity
 disabled={video?false:true}
 
onPress={()=>{
  video?setcamera(pre=>!pre):''
}}>
 <View style={styles.nocircle}>
<Ionicons
         name="camera-reverse-sharp"
         style={{alignSelf:'center'}}
         size={24}
         color={video?'#696969': '#a9a9a9'}
                     
          />
</View>
      
         <Text style={{textAlign:'center', position: 'relative', bottom: 10,fontSize: 12}}> Flip    
         </Text>
          </TouchableOpacity>
          <TouchableOpacity 
onPress={()=>{
   setvideo(prev => !prev);
}}  style={{paddingRight: 40}} >
 <View style={video?styles.nocircle:styles.circle}>
          <MaterialCommunityIcons
            name= {video?"video":"video-off"}
            style={{alignSelf:'center'}}
            size={24}
            color={video?'#696969':'white'}
             
          />
          </View>
           <Text  style={{textAlign:'center', position: 'relative', bottom: 10,fontSize: 12}} >Video    
         </Text>
          </TouchableOpacity>
</View>

     <View style={styles.boundshapetwo}>
     <TouchableOpacity  
onPress={()=>{
   setmic(mic=> !mic);
}} style={{paddingLeft: 30}}>

<View style={mic?styles.nocircle:styles.circle}>
          <Ionicons
            name={mic?"mic":"mic-off"}
            style={{alignSelf:'center'}}
            size={24}
            color={mic?'#696969':'white'}
            
          />
          </View>
           <Text style={{textAlign:'center', position: 'relative', bottom: 10,fontSize: 12}}>Mute    
         </Text>
          </TouchableOpacity>
          <TouchableOpacity 
onPress={()=>{
setAdd(true);
}}>
   <View style={styles.nocircle}>
          <MaterialCommunityIcons
            name="account-plus"
            style={{alignSelf:'center'}}
            size={24}
            color={'#696969'}
             
          />
          </View>
           <Text style={{textAlign:'center', position: 'relative', bottom: 10,fontSize: 12}}>  Add    
         </Text>
          </TouchableOpacity>
     </View>    
       
         
      
    </View>
</> 
    
     
  } else if (idno === 1) {
   //chat
    content = <>
    <TouchableOpacity 
onPress={()=>{
  setidno(0);
}}  style={styles.chatcircle} >
 
          <MaterialCommunityIcons
            name= 'video'
            style={{alignSelf:'center'}}
            size={35}
            color={video?'#696969':'white'}
             
          />
   </TouchableOpacity>
   <View style={{width:'100%', alignItems: 'baseline',
   flexDirection: 'row', justifyContent:'space-between', position: 'absolute', bottom: 0}}>
   <View style={styles.addinputstyle}>
   <TouchableOpacity  style={styles.imageStyle}>
   <MaterialCommunityIcons
            name='paperclip' 
            style={{flex:1}}
            size={25}
            color={'#696969'}
      
    />
   </TouchableOpacity>
          <TextInput
            style={{width: '80%'}}
            placeholder="Type Message Here"
            underlineColorAndroid="transparent"
          />

          
</View>
<TouchableOpacity onPress={()=>{
  
}}  style={{position: 'relative',alignSelf: 'flex-end', backgroundColor: 'orange', height: 40, //any of height
  width: 40,  justifyContent:'center', borderRadius: 150/2}}  >
<MaterialCommunityIcons
            name= 'send'
            style={{alignSelf:'center'}}
            size={25}
            color={video?'#696969':'white'}
             
          />
</TouchableOpacity>
  
   </View>
   

     </>
 
    
  } else if (idno === 2) {
    //catalog
    content = <View style={{width: '100%',height: '100%',backgroundColor:'black', position:'relative',top: 46}}>
    <Text style={{alignSelf:'center',position:'absolute', top: 250, color: 'white'}}>Catalog</Text>
    </View>
  }  
   SplashScreen.hide();
  
  return (
<View style={styles.maincontainer}>
 <View style={{width: '100%', height:'7%', position:'absolute', backgroundColor:'white', flexDirection: 'row',alignItems:'flex-end'}}>
 
 {array.map((item, index) => (
          
            <TouchableOpacity
              style={index === idno ? styles.Topcontanier : styles.NoTopcontanier}
              onPress={() => {
                setidno(index);
              }}>
 
              <Text
                style={
                  index === idno ? styles.toptext : styles.notoptext
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
           
        ))}
     </View>
     <View style={{width: '100%',height: '94%',backgroundColor:'black', position:'absolute',top: 46}}>

     {content}
   </View>
   <View style={{backgroundColor: '#696969', width: 230, height: 30,
  alignSelf: 'center',
  position:'relative',
  marginTop: 66,

 borderTopLeftRadius: 35,
  borderBottomLeftRadius: 35,
  
  justifyContent: 'center',
   borderTopRightRadius: 35, borderBottomRightRadius: 35}}>
<View style={{width: 225, height: 20, alignSelf: 'center',
flexDirection: 'row',justifyContent: 'space-around'}}>

 
 <View style={{flexDirection: 'row',borderRightWidth: 1, borderRightColor: 'white', flex: 1}}>
 <Ionicons
            name= 'alarm-outline'

            style={{alignSelf: 'flex-start'}}
            size={20}
            color={'white'}
             
          />
 
<Text style={{color: 'white'}}>  00 : 00</Text>

 </View>
 <TouchableOpacity style={{flexDirection:'row', flex: 2, justifyContent: 'space-around'}}>
 <MaterialCommunityIcons
            name= 'account-box'

            style={{alignSelf: 'flex-start'}}
            size={20}
            color={'white'}
             
          />
         
          <Text style={{color: 'white'}}>Send Contact</Text>
<MaterialCommunityIcons
            name= 'chevron-right'

            style={{alignSelf: 'flex-start'}}
            size={20}
            color={'white'}
             
          />

 </TouchableOpacity>

          

</View>


   </View>

 






   {add && (
        <View style={styles.ModelBottomTabConatiner}>
           <View style={{flexDirection: 'row', height: '8%',
            width: '100%', position:'relative', top: 15}}>
           <TouchableOpacity  
            onPress={() => {
             
              }}>
           <MaterialCommunityIcons
            name= 'plus'
            style={{alignSelf: 'center', color: 'orange'}}
            size={32}
            color={'#696969'}
             
          />
           </TouchableOpacity>
          
           <Text style={{color: 'black', fontSize: 25}}>Add Agent</Text>
           <TouchableOpacity 
            style={{position: 'absolute', right: 10}}
            onPress={() => {
              setAdd(false); 
              }}
            >
           <MaterialCommunityIcons
            name= 'chevron-down'
            size={35}
            color={'#696969'}
             
          />  
           </TouchableOpacity>

           </View>

<View style={styles.chatinputstyle}>
   <Ionicons
            name='search-outline' 
            size={20}
            style={styles.imageStyle}
    />
          <TextInput
            style={{flex: 1}}
            placeholder="Search Agent name/ skills"
            underlineColorAndroid="transparent"
          />
</View>

  <Text>Laptop</Text>
  <View style={{flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 0.5}}>
  <MaterialCommunityIcons
            name= 'account-circle'
            size={35}
            color={'#696969'}
             
          />
        
  <Text>Swamy Dev {'\n'} Laptops, 2-in-1 Laptops,{'\n'} Smart Phones, Tablets,{'\n'} Product Specialist</Text>  
  <MaterialCommunityIcons
            name= 'phone-plus'
            size={35}
            color={'orange'}
             
          />     
  </View>
 
 </View>
      )}
    </View>
 

  );
}

const styles = StyleSheet.create({
  maincontainer:{
    flex: 1,
    backgroundColor: '#dcdcdc',
    
  },
  NoTopcontanier:{
  flex: 1,
  height: 40,
  justifyContent: 'flex-start',
  borderBottomColor:'grey',
  borderRightWidth: 1,
  borderRightColor:'#dcdcdc'
  },
Topcontanier:{
   flex: 1,
   justifyContent: 'flex-start',
   borderBottomColor:'orange',
   borderBottomWidth: 10,
   borderRightWidth: 1, 
   height: 40,
   borderRightColor:'#dcdcdc'
},
  toptext:{
    textAlign: 'center', color:'orange'
  },
  notoptext:{
    textAlign: 'center', color:'black'
  },
  BottomTabConatiner: {
    position: 'relative',
    bottom: 6,
    width: '100%',
    height: '12%',
    backgroundColor: '#fff5ee',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',   
     justifyContent: 'space-around',
    alignItems: 'center',
  }, 
  ModelBottomTabConatiner: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
   // justifyContent: 'space-evenly',
    width: '100%',
    height: '80%',
    backgroundColor: '#fff5ee',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
    
  }, 
  item: {
   
    alignSelf: "center",
    color:"black"
    
  },
 
  roundshape:  {
    backgroundColor: '#fa8072',
    height: 75, //any of height
    width: 75, //any of width
    justifyContent:'center',
    position: 'absolute',
    bottom:35,
    zIndex:1,
    alignSelf: 'center',
    borderRadius: 150/2   // it will be height/2
  },
  
boundshape:{
  width: '50%',
   height: '45%', 
   flexDirection: 'row',
    justifyContent:'space-around',
},
boundshapetwo:{
  width: '50%',
   height: '45%', 
   flexDirection: 'row',
    justifyContent:'space-around',
    
},

circle:{
  position:'relative', bottom: 10, borderRadius: 150/2,backgroundColor: '#a9a9a9',width: 40, height: 40,justifyContent:'center'
},
nocircle:{
 position:'relative', bottom: 10,width: 40, height: 40,justifyContent:'center'
},
 
callcircle:{
  position: 'absolute',alignSelf: 'flex-end', top: 250, backgroundColor: '#a9a9a9', height: 50, //any of height
  width: 50,  justifyContent:'center', borderRadius: 150/2
},

chatcircle:{
  position: 'absolute',alignSelf: 'flex-end', top: 250, backgroundColor: 'orange', height: 50, //any of height
  width: 50,  justifyContent:'center', borderRadius: 150/2
},

textinputstyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  left: 10,
  alignItems: 'center',
  width: '86%',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: '#000',
  height: 40,
  borderRadius: 5,
  margin: 10,
  top: 20,
},
chatinputstyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  marginTop: 20,
  alignItems: 'center',
  width: '93%',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: '#000',
  height: 40,
  borderRadius: 5,
 
  
},
addinputstyle: {
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  marginTop: 20,
  left: 30,
  alignItems: 'center',
  width: '75%',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: '#000',
  height: 40,
  borderRadius: 5,
 
  
},

imageStyle: {
 
position: 'absolute',
right: 0,
  height: 25,
  width: 25,
  
  
},



});
export default App;
