import express from 'express'
import { Sequelize } from 'sequelize'

const app = express()

const sequelize = new Sequelize('test_db', 'postgres','qazqazqaz', {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    define: {
        underscored: true
    }
})


const port = 3000

app.get('/', (req, res) => res.send('Hello World'))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT || port, () => console.log(`Сервер работает на порту ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()
