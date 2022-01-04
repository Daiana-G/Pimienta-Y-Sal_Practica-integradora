let express =require('express')
let app= express();
const mainRoutes = require('./routes/mainRoutes')

app.use(express.static('./public'))

app.set('view engine', 'ejs')

app.use('/',mainRoutes)

app.listen(3000, 
()=> console.log('servidor levantado'))