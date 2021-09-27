var admin = require("firebase-admin");
const express = require('express')
const app = express()
var serviceAccount = require("./project-setup-6c0ea-firebase-adminsdk-nur9v-ab2fd5461c.json");
app.use(express.json())
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.post('/send-noti',(req, res)=>{
  console.log(req.body)
  const message = {
    notification:{
        title: 'new ad',
        body: 'new ad posted click to open'
    },
    
    token: 'c554EAo7T8OPCbU1CZkL5S:APA91bG43mTl19Q7fxIbJ4-1tLLDqtusis_XAxDHrGBEdXYB1MEx5m5K0Otp0MxIrYCk67jdb6fYc8mpa3aJwB9M-baEW76RaA6UcOLyWFjyJt3wfCY8HKNhLFDLPtfr-SHJs1-VPQZK'
    
    }
    
    admin.messaging().send(message).then(res=>{
        console.log('send sucess')
    })
})
app.listen(3000, ()=>{
  console.log('server running')
})