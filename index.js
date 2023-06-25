const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const nintendo = {
    "1": {
      "name": "Nintendo Switch",
      "price": 299,
      "total number of sales": 89_000_000,
      "release year": 2017,
      "image" : "https://www.cdsolution.ca/wp-content/uploads/2019/05/bundle_color_portable-1.jpg"

    },
    "2": {
      "name": "Wii U",
      "price": 299,
      "total number of sales": 13_560_000,
      "release year": 2012,
      "image": "https://static-ca.gamestop.ca/images/products/707535/3max.jpg"
    },
    "3": {
      "name": "Nintendo 3DS",
      "price": 199,
      "total number of sales": 75_940_000,
      "release year": 2011,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nintendo-3DS-AquaOpen.jpg/800px-Nintendo-3DS-AquaOpen.jpg"
    },
    "4": {
      "name": "Wii",
      "price": 249,
      "total number of sales": 101_630_000,
      "release year": 2006,
      "image": "https://techcrunch.com/wp-content/uploads/2019/06/nintendo-wii.jpg?w=680"
    },
    "5": {
      "name": "Nintendo DS",
      "price": 129,
      "total number of sales": 154_020_000,
      "release year": 2004,
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Nintendo-DS-Lite-Black-Open.jpg"
    },
    "unknown": {
        "name": "unknown",
        "price": "unknown",
        "total number of sales": "unknown",
        "release year": "unknown",
        "image": "https://s3-alpha.figma.com/hub/file/2862094659/506b90cc-a589-4e08-ae18-50a94c180ce1-cover.png"
      }
  }
  

app.get("/", (request,response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api", (request, response)=> {
    response.json(nintendo)
})

app.get("/api/:number", (request, response)=> {
    const nintendoNames = request.params.number
    if ( nintendo[nintendoNames]){
        response.json(nintendo[nintendoNames])
    } else {
        response.json(nintendo["unknown"])

    }
})




app.listen(process.env.PORT || PORT, (request, reponse) => {
    console.log(`Server running on server ${PORT}`)
})
