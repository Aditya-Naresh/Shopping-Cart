var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"Sony Xperia Z5",
      category:'Mobile',
      description:"This is a good phone",
      image:"https://www.smartcellular.in/media/catalog/product/cache/cfaa1692031f009488d1cfea5ce7e1ee/v/_/v_9_18.jpg"
    },
    {
      name:"I Phone-11",
      category:'Mobile',
      description:"This is a good phone",
      image:"https://m.media-amazon.com/images/I/71QE00iB9IL._SX466_.jpg"
    },


    {
      name:"Huawei P40 Pro",
      category:'Mobile',
      description:"This is a good phone",
      image:"https://imgs.search.brave.com/irn1ADvBzo03WSgPnkyXtV8GkZSW_44yA00HDVVxV1A/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5K/RHJNaHNuSzBqZDl2/R296OGJkX2dnSGFI/YSZwaWQ9QXBp"   
     },


    {
      name:"Motorola Edge Plus",
      category:'Mobile',
      description:"This is a good phone",
      image:"https://imgs.search.brave.com/3IHUbPq2F4rFCWEpLqFNYxgo3hJmJ1U57x3ErFwfyVc/rs:fit:695:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/NzFlemk5XzQ2RjlP/VzRtaHo1aHJnSGFG/RCZwaWQ9QXBp"  
     },
  ]
  res.render('index', { products,admin:false });
});

module.exports = router;
