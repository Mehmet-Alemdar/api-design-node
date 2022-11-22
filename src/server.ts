import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200)
  res.json({messge: 'hi'})
})

export default app