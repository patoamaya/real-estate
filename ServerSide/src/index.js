const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const IndexRouter = require('./routes/IndexRouter')
const OwnerRouter = require('./routes/OwnerRouter')

const app = express()
mongoose.connect("url", )
.then((db)=>{
    console.log(`Connected`)
})
.catch((err)=>{
    console.log(`Error: ${err}`)
})

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Listening on http://localhost:${PORT}`)
})

app.use('/', IndexRouter)
app.use('/owner', OwnerRouter)