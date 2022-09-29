import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => res.send('Hello World'))

app.listen(process.env.PORT || port, () => console.log(`Сервер работает на порту ${port}`))