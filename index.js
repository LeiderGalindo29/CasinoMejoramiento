const express = require('express')
const app = express()
const port = 3006
app.set('view engine','ejs');
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public')); 
 
//rutas
app.use('/', require('./routes/Routes'))
  
app.use((req, res, next)=>
{
    res.status(404). sendFile(__dirname + '/public/404.html')
}
)

app.listen(port, () => {
  console.log(`Estas en el puerto : ${port}`)
})

