const express = require('express');
 const router = express.Router();
 const defaultColor="lightblue"

router.get('/cards',(req,res)=>{
    //6 cards
    let cards=[]
    while (cards.length < 6){
        cards.push(getNewCard())
    }
    
    console.log("Cards API res:")
    console.log(cards)
    res.json(cards);
});

router.get('/result',(req,res)=>{
    let items = []
    while(items.length < 10){
        items.push(getUniqueNumber(items))
      }
    console.log("Result API res:")
    console.log(items)
    res.json(items);
});

function getUniqueNumber(tiles) {
    let text =  Math.floor(Math.random() * 53);
    while (tiles.indexOf(item =>{ return item.text == text }) > -1) {
        text =  Math.floor(Math.random() * 53);
    }

    return text;
}

function getNewCard(){
    let items = []
    while(items.length < 25){
      let text =  getUniqueNumber(items)
      items.push({text: text,  color: defaultColor, isMarked: false})
    }
    return items;
}

module.exports = router;