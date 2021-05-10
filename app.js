const express = require('express');  
const router = express();
const bodyParser= require("body-parser");
router.use(bodyParser.urlencoded({extended:true}));

router.get("/",(req,res)=>{
  res.send("I am Sannidhya");
});


  router.post('/tweet',(req,res)=>{
   
    console.log('hello');
    console.log(req.body);
    console.log('vsdwdv');
    let city=req.body.city;
    let state=req.body.state;
    let facility=[
      req.body.oxygen,
      req.body.beds,
      req.body.Tiffin,
      req.body.Vaccination,
      req.body.ICU,
      req.body.Ventilator,
      req.body.Remdesivir,
      req.body.Grocery,
      req.body.Tocilizumab,
      req.body.Fabiflu,
      req.body.Favipiravir,
      req.body.Plasma
    ];
    let string="";
    for(let i=0; i<facility.length; i++){
      if(facility[i] && string.length==0){
        string+=facility[i];
      }
      else if(facility[i]){
        string+=" OR "+facility[i];
      }
      else
      continue;
    }
    let newString="https://twitter.com/search?f=live&q=verified%20";
    if(city)
    newString+=" "+city;
    if(!city)
    newString+=" "+state;
    if(string)
    newString+=" ( "+string+" ) ";
    newString+="%20-%22not%20verfied%22%20-%22unverified%22%20-%22needed%22%20-%22required%22";
    return res.redirect(newString);
  }); 
  router.listen(3000,function(){
    console.log("serverstarted");
  });
  