const express = require('express')
const multer = require('multer')
const cors = require('cors')
const upload = multer({dest: 'imgaes/'})
const app = express()

app.get('/', (req, res) => {
    res.send('hello word')
})

app.options('/upload', cors())
app.post('/upload', cors(), upload.single('file'), (req, res)=> {
    res.send(JSON.stringify(req.file.filename))
})

app.get('/preview/:key', cors(), (req, res)=> {
    res.sendFile(`images/${req.params.key}`, {
        root: __dirname,
        headers: {
            'Content-Type': 'image/jpeg',
        }
    }, (error)=>{
        console.log(error)
    })
})
var port = process.env.PORT || 3000
console.log(port)
app.listen(port)