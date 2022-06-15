const express = require('express')
const app = express()
const port = 3001
const bodyParser = require ('body-parser');
const cors = require ('cors');

app.use(cors());
app.use(bodyParser.json());

let battleFeed = []

const items = [
    {
        "status": "failed",
        "reason": "Failed to reach Overwatch server for kill feed",
        "payload": [
          
        ]
      },
      {
        "status": "successful",
        "reason": "OK",
        "payload": [
          {
            "platform": "pc",
            "region": "1",
            "source_player_id": "Jimmy#222",
            "source_character": "Mei",
            "target_player_id": "DietCokeIsEvil#321",
            "target_character": "Mei",
            "method": "Cryo-Freeze",
            "damage": 13
          }
        ]
      },
      {
        "status": "successful",
        "reason": "OK",
        "payload": [
          {
            "platform": "asdfsdf",
            "region": "2",
            "source_player_id": "FalconPunch#133",
            "source_character": "Winston",
            "target_player_id": "DietCokeIsEvil#321",
            "target_character": "Mei",
            "method": "Primal Rage",
            "damage": 82
          }
        ]
      },
      {
        "status": "successful",
        "reason": "OK",
        "payload": [
          {
            "platform": "pc",
            "region": "2",
            "source_player_id": "FalconPunch#133",
            "source_character": "Zenyatta",
            "target_player_id": "DietCokeIsEvil#321",
            "target_character": "Mei",
            "method": "Primal Rage",
            "damage": 82
          }
        ]
      },
      {
        "status": "successful",
        "reason": "OK",
        "payload": [
          {
            "platform": "test",
            "region": "3",
            "source_player_id": "DietCokeIsEvil#321",
            "source_character": "Mei",
            "target_player_id": "Jimmy#222",
            "target_character": "Zenyatta",
            "method": "Cryo-Freeze",
            "damage": 25
          }
        ]
      },
      {
        "status": "successful",
        "reason": "OK",
        "payload": [
          {
            "platform": "test",
            "region": "3",
            "source_player_id": "DietCokeIsEvil#321",
            "source_character": "Winston",
            "target_player_id": "Jimmy#222",
            "target_character": "Winston",
            "method": "Cryo-Freeze",
            "damage": 25
          }
        ]
      },
      {
        "status": "successful",
        "reason": "OK",
        "payload": [
          {
            "platform": "test",
            "region": "3",
            "source_player_id": "DietCokeIsEvil#321",
            "source_character": "Zenyatta",
            "target_player_id": "Jimmy#222",
            "target_character": "Zenyatta",
            "method": "TEst",
            "damage": 25
          }
        ]
      },
      {
        "error": 500,
        "message": "Cthulu ate my JSON response"
      },
]



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function consalidateBattleFeed(battleArr) {
  var newArray = [];
    battleArr.forEach(item => {
     var newItem = {targetCharacter: item.targetCharacter, damage: 0};
     battleArr.forEach(innerItem => {
        if(innerItem.targetCharacter === item.targetCharacter){
            newItem.damage = newItem.damage + innerItem.damage;
        }
     });
    newArray.push(newItem);
  });
    return newArray.filter((v,i,a)=>a.findIndex(t=>(t.targetCharacter===v.targetCharacter))===i)
}

app.get('/api', (req, res) => {
  const randomNumber = getRandomInt(0,items.length - 1)
  res.send(items[randomNumber])
})

app.post('/battle', (req, res) => {
    battleFeed.push(req.body.payload)
    battleFeed = consalidateBattleFeed(battleFeed)
    res.send(battleFeed)
});

app.get('/startNewGame', (req, res) => {
  battleFeed = []
  res.send(battleFeed)
});


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})