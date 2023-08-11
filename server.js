require('dotenv').config() // **
/* This lets me take the values from my .env file
    and inject them into process.env
    My .env should have a MONGO_URI which will come from my
    MongoDB cloud provider.
*/
require('./config/database') // **
const PORT = process.env.PORT || 8000
const path = require('path')
/* running this will connect our database to our MERN app */
const app = require('./app-server')

app.use('/api/todos', require('./routes/api/todos'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}. We In the Building.`)
})