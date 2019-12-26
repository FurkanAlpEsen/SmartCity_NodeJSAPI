const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/library', db.getLibraries)
app.get('/museum',db.getMuseums)
app.get('/park',db.getParks)

app.get('/library/:id', db.getLibraryId)
app.get('/museum/:id', db.getMuseumId)
app.get('/park/:id', db.getParkId)

app.post('/library', db.createLibrary)
app.post('/museum', db.createMuseum)
app.post('/park', db.createPark)

app.put('/library/:id', db.updateLibrary)
app.put('/museum/:id', db.updateMuseum)
app.put('/park/:id', db.updatePark)

app.delete('/library/:id', db.deleteLibrary)
app.delete('/museum/:id', db.deleteMuseum)
app.delete('/park/:id', db.deletePark)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
  


