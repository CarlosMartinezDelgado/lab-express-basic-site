const express = require('express')
const app = express()  
const port = 3000
app.use(express.static("public"))
app.use(express.static("views"))


app.get('/', (req, res) => {    // HOME
    res.sendFile(__dirname + "/views/home.html")
})

app.get('/about', (req, res) => {    // ABOUT
    res.sendFile(__dirname + "/views/about.html")
})

app.get('/work', (req, res) => {    // WORK
    res.sendFile(__dirname + "/views/work.html")
})

app.get('/foto-gallery', (req, res) => {    // FOTOS
    res.sendFile(__dirname + "/views/foto-gallery.html")
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })