const express = require('express')
const cors = require('cors')
const app = express()
const port = 3004

app.use(cors())

const familiesList = [
    {
        "id": 1,
        "name": "Robinson",
        "memebersIds": [
        1,
        2,
        3,
        4
        ]
    },
    {
        "id": 2,
        "name": "Monson",
        "memebersIds": [
        5,
        6,
        7
        ]
    },
    {
        "id": 3,
        "name": "Lemus",
        "memebersIds": [
        8,
        9,
        10
        ]
    }
]

const membersList = [
    {
        "id": 1,
        "name": "Robinson",
        "memebersIds": [
        1,
        2,
        3,
        4
        ]
    },
    {
        "id": 2,
        "name": "Monson",
        "memebersIds": [
        5,
        6,
        7
        ]
    },
    {
        "id": 3,
        "name": "Lemus",
        "memebersIds": [
        8,
        9,
        10
        ]
    }
]

app.get('/members', (req, res) => {
  res.send({membersList : membersList})
})

app.get('/families', (req, res) => {
    res.send({familiesData: familiesList})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})