import * as React from 'react';
import SplashScreen from 'react-native-splash-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from './data/dummy-data';
import { AGENT } from './data/agent-data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, StyleSheet, TouchableOpacity, Text,TextInput, Image} from 'react-native';

function App() {
const [video, setvideo] = useState(false);
const [camera, setcamera] = useState(false);
const [mic, setmic] = useState(true);
const [idno, setidno] = useState(0);
const [chatgoals, setChatGoals] = useState([]);
const [enteredGoal, setEnteredGoal] = useState('');
const [add, setAdd] = useState(false);
const [mute, setmute] = useState(true);
const [calling, setcalling] = useState(false);
const [snackbar, setsnackbar] = useState(false);
const [timerandcontactbar, settimerandcontactbar] = useState(true);  
const [element, setelement] = useState('');
var content;
var array = [
{name: 'Call'},
{name: 'Chat'},
{name: 'Catalog'},
];
  
//snackbar for catalog and original screen
const snackBar = text => {
return(
 
<View 
   style={{
   width: '80%',
   backgroundColor: 'orange',
   height: '3%',
   alignSelf: 'center',
   marginTop: 350, 
   borderRadius: 5}}>
  <Text style={{alignSelf: 'center',
  justifyContent: 'center',
 color: 'white' }}>{text}</Text>
      </View> 
      )
   
// snack bar message to show details sent to chat screen
}

//catalog flat list
const renderGridItem = itemData => {
    return(
<View style={{
   flex: 1,
   backgroundColor: 'white',
   alignSelf: 'center',
   marginBottom: 10,
   flexDirection: 'column',
   padding: 20,
   borderRadius: 8}}>
 <Text style={{
 color: 'grey', fontSize: 15,
 fontWeight: '700' }}>{itemData.item.primaryproduct}</Text>
 <View style={{
 width: '80%',
 height: '60%',
 flexDirection: 'row',
 justifyContent: 'space-around'}}>

 <Image
resizeMode='contain'
source={require('./assets/laptop.png')}
style={{width: 50, height: 50}}  
/>
<View style={{flexDirection: 'column'}}>
<Text style={{color: 'grey', fontSize: 15, fontWeight: '700' }}>{itemData.item.description1}</Text>
<Text style={{color: 'grey', fontSize: 15 }}>{itemData.item.description2}</Text>
<Text style={{color: 'grey', fontSize: 15, fontWeight: '700' }}>{itemData.item.description3}</Text>
</View>
</View>
 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

 <View style={{width: 55,
  height: 30,
  backgroundColor: 'white',
  borderColor: 'orange',
  borderWidth: 2,
  borderRadius: 6,
  justifyContent: 'center'}}>
 <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around'}}
 onPress={()=>{
  setelement('share');
  setsnackbar(true);
  setTimeout(()=>{
  setsnackbar(false); 
  }, 1000);
 addGoalHandler(itemData.item.description1,'share');
 }}
 >
 <MaterialCommunityIcons
    name='share-variant' 
    size={15}
    color={'#696969'}
  
  />
  <Text style={{color: 'orange', fontSize: 10, fontWeight: '700'}}>Share</Text>
 </TouchableOpacity>
   
   </View>

  <View style={{width: 75,
  height: 30,
  backgroundColor: 'orange',
  borderRadius: 6,
  justifyContent: 'center'}}>
 <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around'}}
 onPress={()=>{
   setelement('addtocart')
  setsnackbar(true);
  setTimeout(()=>{
  setsnackbar(false);
  }, 1000);
  addGoalHandler(itemData.item.description1, 'addtocart');
 }}
 >
 <MaterialCommunityIcons
    name='cart' 
    size={15}
    color={'white'}
  
  />
    <Text style={{color: 'white', fontSize: 10, fontWeight: '700'}}>Add to cart</Text>
 </TouchableOpacity>
   
   </View>

 </View>
 
 
 
    </View>
    );
};
//call add icon flatlist
const addFlatList = itemData => {
    if(itemData.item.description2 === 'null'){
      return(
<View style={{width:'100%' ,
 height: 70, padding: 10,
 flexDirection: 'column', justifyContent: 'space-around', borderBottomWidth: 0.5}}>
 <Text style={{color: 'orange', fontSize: 17}}>{itemData.item.description1}</Text>
 <View>
 <Text style={{color: '#2f4f4f'}}>No agent Avaliable</Text>        
 </View>
 </View>
      );
    }
    else{
      return(
        //add call flat list
 <View style={{width:'100%' ,
  flexDirection: 'column', padding: 10,
  justifyContent: 'space-around', borderBottomWidth: 0.5}}>
       <Text style={{color: 'orange', fontSize: 17}}>{itemData.item.description1}</Text>
       <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
       
       <MaterialCommunityIcons
       style={{width: 50, height: 50, alignSelf: 'center'}}
                 name= 'account-circle'
                 size={40}
                 color={'#a9a9a9'}
                  
               />
 <View style={{flexDirection: 'column'}}>
 <Text style={{fontWeight: 'bold', color: 'black'}}>{itemData.item.description2}</Text>
 <Text style={{color: '#2f4f4f'}}>{itemData.item.description3}</Text>
               </View>
          
  <TouchableOpacity onPress={()=>{
  setTimeout(()=>{
  settimerandcontactbar(true);
  setcalling(false);
  }, 5000);
      settimerandcontactbar(false);
      setcalling(true);
       }}>
       <MaterialCommunityIcons
                 name= 'phone-plus'
                 size={35}
                 color={'orange'}
                  
               />
       </TouchableOpacity> 
       
       </View>
            
       </View>
       
       
           );
    }
  
}
//chat flat list
const chatText = itemData =>
{
  // chat screen text
if(itemData.item.type === 'sendcontact'){
return(
  
<View style={{ padding: 10, backgroundColor: 'white',
 marginBottom: 15, alignItems: 'center',
 justifyContent: 'center',
 borderBottomEndRadius: 20,
 borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}>

<View style={{flexDirection: 'column',}}>
<Text style={{color: 'black',
fontSize: 15, textAlign: 'center'}}>{itemData.item.value}</Text>
<View style={{flexDirection: 'row',
width: 100, alignItems: 'center',
justifyContent: 'space-between'}}>
<MaterialCommunityIcons
name= 'account'
size={15}
color={'black'}
/>
<Text style={{color: 'black',
fontSize: 15, textAlign: 'center'}}>Swamy Dev</Text>
</View>
<View style={{flexDirection: 'row', width: 180, 
alignItems: 'center', justifyContent: 'space-between'}}>
<MaterialCommunityIcons
            name= 'email'
            size={15}
            color={'black'}
    
          />
<Text style={{color: 'black',
fontSize: 15}}>support@connect.com</Text>
</View>
</View> 
</View>
 );
 }

 else if(itemData.item.type === 'share'){
  return(
   <View style={{ padding: 10, backgroundColor: 'orange',
     marginBottom: 15, alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 20,
     borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}>
   <Text style={{color: 'white',
   fontSize: 15, textAlign: 'center'}}>Shared Product :</Text>
   <Text style={{color: 'white', fontWeight: 'bold',
   fontSize: 15, textAlign: 'center'}}>{itemData.item.value}</Text>
   </View> 
    );

  }
  
 else if(itemData.item.type === 'addtocart'){
  return(
   <View style={{ padding: 10, backgroundColor: 'white',
     marginBottom: 15, alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 20,
     borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}>
   <Text style={{color: 'black',
   fontSize: 15}}>Request to add to cart sent to Customer for</Text>
   <Text style={{color: 'black', fontWeight: 'bold',
   fontSize: 15}}>{itemData.item.value}</Text>
   </View> 
    );

  }
 else{
  return(
   <View style={{ padding: 10, backgroundColor: 'white',
     marginBottom: 15, alignItems: 'center',
    justifyContent: 'center',
    borderBottomEndRadius: 20,
     borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}>
   <Text style={{color: 'black',
   fontSize: 15, textAlign: 'center'}}>{itemData.item.value}</Text>
   </View> 
    );

  }
 


}

const videoButton = () => {
  return(
<TouchableOpacity 
  onPress={()=>{
    setidno(0);
  }}  style={video?styles.nochatcircle: styles.chatcircle} >
   
   <MaterialCommunityIcons
              name= 'video'
              style={{alignSelf:'center'}}
              size={33}
              color={video?'#fffaf0':'#fffa'}
               
    />
     </TouchableOpacity>
  

  );
   
}
// set the array of strings
const addGoalHandler = (goalTitle, type) => {
setChatGoals(currentGoals => [
{value: goalTitle, type: type},
 ...currentGoals,
]);
 };

//set the text 
const goalInputHandler = enteredText => {
 
setEnteredGoal(enteredText);
};
//tabs
if (idno === 0) {
    //call
content =
<> 
<View style={{justifyContent:'space-evenly',
alignItems:'center', position: 'relative', top: 20}}>
<Image
resizeMode='contain'
source={require('./assets/group.png')}
style={{width: '100%', height: '46%', backgroundColor: 'grey'}}  
/>
<Image style={{width: '70%', height: '44%', backgroundColor: 'grey'}}
source={require('./assets/group.png')}
resizeMode='contain'>
</Image>
</View>
<TouchableOpacity 
onPress={()=>{
 setidno(1);
}} 
 style={styles.callcircle} >
 
          <MaterialCommunityIcons
            name= 'message'
            style={{alignSelf:'center'}}
            size={24}
            color={'#fffa'}
             
          />
   </TouchableOpacity> 
 

<TouchableOpacity 
style={styles.roundshape}>
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
         size={28}
         color={video?'#696969': '#a9a9a9'}
                     
 />
</View>
      
         <Text style={{textAlign:'center', position: 'relative',
          bottom: 10,fontSize: 14}}> Flip    
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
            size={28}
            color={video?'grey':'white'}
             
          />
          </View>
           <Text  style={{textAlign:'center',
            position: 'relative', bottom: 10,fontSize: 14}} >Video    
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
            size={28}
            color={mic?'#696969':'white'}
            
          />
          </View>
<Text style={{textAlign:'center',
position: 'relative', bottom: 10,fontSize: 14}}>Mute    
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
            size={28}
            color={'#696969'}
             
          />
          </View>
           <Text style={{textAlign:'center',
            position: 'relative', bottom: 10,fontSize: 14}}>  Add    
         </Text>
          </TouchableOpacity>
     </View>    
       
         
      
    </View>
</> 
    
     
} else if (idno === 1) {
   //chat
content = <>

    <View style={{
     width: '100%',
     height: '85%',
     marginTop: 60,
     position: 'absolute',
     backgroundColor: 'black',
     alignSelf: 'center'}}>

 <FlatList
 contentContainerStyle={{alignItems: 'flex-end',
 alignContent: 'space-around',
 padding: 10,}}
 keyExtractor={(item, index) => item.id}
 data={chatgoals}
 inverted={true}
 renderItem={chatText}
/>
</View>
{videoButton()}
{/* <Image
resizeMode='contain'
source={require('./assets/group.png')}
style={{width: '60%',  height: '46%', alignSelf: 'center', marginTop: 150}}  
        /> */}
        
   <View style={styles.textinputandsend}>
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
            onChangeText={goalInputHandler}
            value={enteredGoal}
            underlineColorAndroid="transparent"
          />

          
</View>
<View style={styles.sendview}>
<TouchableOpacity 
onPress={()=>{
  if(enteredGoal){
  setEnteredGoal('')
  addGoalHandler(enteredGoal, 'text')
}
  
  
}}
 >
<FontAwesome5
            name= 'paper-plane'
            style={{alignSelf:'center'}}
            size={20}
            color={video?'#696969':'white'}
             
 />
</TouchableOpacity>
</View>

  
   </View>
   

     </>
 
    
}
else if (idno === 2) {
    //catalog
    content = <>
    {videoButton()}
   <View style={{width: '100%', height: '85%', backgroundColor: 'black',
   alignItems: 'center', alignSelf: 'center', 
   flexDirection: 'column', marginTop: 90, justifyContent: 'space-evenly'}}>
    <View style={{
    width: '75%',
    backgroundColor: 'white',
    height: '25%',
    marginBottom: 10,
    padding: 20,
    justifyContent: 'space-evenly',
    borderRadius: 8}}>
  <Text style={{
 
 color: 'black', fontSize: 15, fontWeight: '700' }}>Customer Call (English)</Text>
 <Text style={{ 
 color: 'grey', fontSize: 15}}>Product Website</Text>
<Text style={{color: 'grey', fontSize: 15 }}>Product: Microsoft Surface Go 2</Text>
</View>
<FlatList
 keyExtractor={(item, index) => item.id}
 data={CATEGORIES}
 renderItem={renderGridItem}
 />
<View 
  style={{
  width: '85%',
  backgroundColor: 'grey',
  height: '4%',
  marginTop: 20,
  borderRadius: 5}}>
  <Text style={{alignSelf: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  color: 'white' }}>* Prices may not reflect promotional discounts </Text>
</View> 
<View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%'}}>
<View style={{ flexDirection: 'row',
  marginTop: 20,
  alignItems: 'center',
  width: '33%',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: '#000',
  height: 40,
  borderRadius: 5,}}>
   <Ionicons
            name='search-outline' 
            size={20}
            style={styles.imageStyle}
    />
          <TextInput
            style={{flex: 4}}
            placeholder="Search Product"
            underlineColorAndroid="transparent"
          />
</View>

<View style={{  flexDirection: 'row',
  marginTop: 20,
  alignItems: 'center',
  width: '33%',
  
  backgroundColor: '#fff',
  borderWidth: 2.5,
  borderColor: 'orange',
  height: 40,
  borderRadius: 5,}}>
 <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-around'}}>
 <MaterialCommunityIcons
    name='share-variant' 
    size={15}
    color={'#696969'}
  
  />
    <Text style={{color: 'orange', fontSize: 13, fontWeight: '700'}}>View Full  Catalog</Text>
 </TouchableOpacity>
   
   </View>
</View>


 </View>
 </>   
}  
SplashScreen.hide();
return (
<View style={styles.fullscreen}>
{/* //tab and 3 screens */}
<View style={styles.rowarrayscreen}>

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
     {/* //swap screen */}
     <View style={styles.swapscreen}>

 {content}
 </View>

{/* //timer and send contact */}
{
timerandcontactbar && (
<View style={styles.timerandcontactbar}>

<View style={styles.timerandcontactbarinside}>

 
 <View style={styles.timerbar}>
 <Ionicons
            name= 'alarm-outline'

            style={{alignSelf: 'flex-start'}}
            size={20}
            color={'white'}
             
          />
 
<Text style={{color: 'white', fontSize: 15}}>00 : 00</Text>

 </View>
 <TouchableOpacity style={styles.contactontouch}
  onPress={() => {
  setelement('sendcontact');
  setsnackbar(true);
  addGoalHandler('For further help you may reach me at', 'sendcontact')
  setTimeout(()=>{
  setsnackbar(false); 
  }, 2000);
  }}
 > 
<FontAwesome5
            name= 'address-book'
            style={{alignSelf: 'center'}}
            size={15}
            color={'white'}
             
/>
         
<Text style={{color: 'white', fontSize: 15}}>Send Contact</Text>
<MaterialCommunityIcons
            name= 'chevron-right'

            style={{alignSelf: 'flex-start'}}
            size={20}
            color={'white'}
             
          />

 </TouchableOpacity>
</View>
</View>
)
}
{/* //calling agent  */}
{
calling && (
<View style={{
  backgroundColor: '#696969', 
  width: '28%',
  height: '5%',
  alignSelf: 'center',
  marginTop: 66,
  borderTopLeftRadius: 35,
  borderBottomLeftRadius: 35,
  justifyContent: 'center',
  borderTopRightRadius: 35,
  borderBottomRightRadius: 35,}}>
<View style={{flexDirection: 'row',
 justifyContent: 'space-around'}}>
<FontAwesome5
            name= 'phone-square'
            size={20}
            color={video?'#696969':'white'}
             
 />
<Text style={{color: 'white', textAlign: 'center'}}>Calling...</Text>

</View>

 
</View>
)
}
{
// mute bar  for customer
mute && (
<View style={styles.mutebar}>
<View style={styles.mutebarinside}>

<Text style={{color: 'white', fontSize: 15}}>Customer sound : Muted</Text>
</View>
</View> 
)
}

{
//add for call screen
add && (
<View style={styles.ModelBottomTabContainer}>
  <View style={styles.ModelBottomTabTop}>
           <MaterialCommunityIcons
            name= 'plus'
            style={{color: 'orange'}}
            size={35}
            color={'#696969'}
         />
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
<FlatList
keyExtractor={(item, index) => item.id}
data={AGENT}
renderItem={addFlatList}
/>
</View>
)}

{
  snackbar && (
  snackBar( element === 'sendcontact'?
  'contact details shared with customer':
  element === 'share'?
  'product details shared with the customer':
  'product added to the cart'
   )
  )
  }
 
</View>
);
}

const styles = StyleSheet.create({
 fullscreen:{
    flex: 1,
    backgroundColor: '#dcdcdc',
    
 },

 rowarrayscreen:{
    width: '100%', height:'7%',
    position:'absolute', 
    backgroundColor:'white',
    flexDirection: 'row',
    alignItems:'flex-end'
 },

 swapscreen:{
    width: '100%',
    height: '94%',
    backgroundColor:'black',
     position:'absolute',
     top: 46,
 },

timerandcontactbar:{
  backgroundColor: '#696969', 
  width: '68%',
  height: '5%',
  alignSelf: 'center',
  position:'absolute',
  marginTop: 66,
  borderTopLeftRadius: 35,
  borderBottomLeftRadius: 35,
  justifyContent: 'center',
  borderTopRightRadius: 35,
  borderBottomRightRadius: 35,
},

timerandcontactbarinside:{
width: '100%',
height: '50%',
alignSelf: 'center',
marginLeft: 10,
flexDirection: 'row',
justifyContent: 'space-around'
},
 
mutebar:{
  backgroundColor: '#696969', 
  width: '45%',
  height: '5%',
  alignSelf: 'center',
  position:'absolute',
  top: 110,
  borderTopLeftRadius: 12,
  borderBottomLeftRadius: 12,
  justifyContent: 'center',
  borderTopRightRadius: 12,
  borderBottomRightRadius: 12,
},

mutebarinside:{
width: '100%',
height: '50%',
marginLeft: 10,
 
},

catalogscreen: {
  width: '100%',
  height: '100%',
  backgroundColor:'black',
  position:'relative',
  top: 46,
},

timerbar:{
flexDirection: 'row',
borderRightWidth: 1,
borderRightColor: 'white',
flex: 1,
justifyContent: 'space-evenly',
},

sendview: {
  position: 'relative',alignSelf: 'flex-end',
  marginRight: 10,
  backgroundColor: 'orange',
  height: 40, //any of height
  width: 40,
  justifyContent:'center',
  borderRadius: 150/2
},

contactontouch:{
  flexDirection:'row',
  flex: 2, 
  justifyContent: 'space-around',
},

textinputandsend:{
  width:'100%', 
  alignItems: 'baseline',
  flexDirection: 'row',
  justifyContent:'space-between',
  position: 'absolute',
  bottom: 10
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
    textAlign: 'center', 
    color:'orange',
    fontSize: 20,
  },

  notoptext:{
    fontSize: 20,
    textAlign: 'center', color:'grey'
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
  ModelBottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    //justifyContent: 'space-evenly',
    width: '100%',
    height: '80%',
    backgroundColor: '#fff5ee',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
    
  },
  
ModelBottomTabTop:{
    flexDirection: 'row',
    height: '8%',
    width: '100%'
  },

item: {
   
    alignSelf: "center",
    color:"black"
    
  },
 
roundshape:  {
    backgroundColor: '#fa8072',
    height: 70, //any of height
    width: 70, //any of width
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
  position:'relative',
   bottom: 10,
   borderRadius: 150/2,
   backgroundColor: '#808080',
   width: 40,
   height: 40,
   justifyContent:'center'
},

nocircle:{
 position:'relative',
  bottom: 10,
  width: 40,
   height: 40,
   justifyContent:'center'
},
 
callcircle:{
 position: 'absolute',
 alignSelf: 'flex-end',
 right: 15,
 top: 320, backgroundColor: '#a9a9',
 height: 50, //any of height
 width: 50,  justifyContent:'center', borderRadius: 150/2
},

chatcircle:{
position: 'absolute',
alignSelf: 'flex-end', top: 320,
right: 15,
backgroundColor: '#6969',
height: 50, //any of height
width: 50, 
zIndex: 1,
justifyContent:'center', borderRadius: 150/2
},
nochatcircle:{
  position: 'absolute',
  alignSelf: 'flex-end', top: 320,
  right: 15,
  backgroundColor: 'orange',
  height: 50, //any of height
  width: 50, 
  zIndex: 1,
  justifyContent:'center', borderRadius: 150/2
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
