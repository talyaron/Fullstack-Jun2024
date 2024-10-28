const express = require('express')
const app = express()
const port = process.env.port || 3004





app.use(express.static('public'))

app.get('/', (req:any, res:any) => {
  res.send('Hello World!')
  console.log('hello')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

