'use strict'

const { default: mongoose } = require("mongoose")
const { db: { host, name, port }} = require('../configs/config.mongodb')
const connectionStr = `mongodb://${host}:${port}/${name}`

class Database {

    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true),
            mongoose.set('debug', {color: true})
        }
        mongoose.connect( connectionStr ).then( _ => {
            console.log(connectionStr)
            console.log(`Connected Mongodb Success`)
        })
        .catch( err => console.log(`Error Connect!`))
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb