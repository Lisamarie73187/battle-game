const express = require('express')
const app = express()
const port = 3001
const cors = require ('cors');
app.use(cors());



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
        "error": 500,
        "message": "Cthulu ate my JSON response"
      },
]



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/api', (req, res) => {
  const randomNumber = getRandomInt(0,4)
  res.send(items[randomNumber])
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})