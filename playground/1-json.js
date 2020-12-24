const fs = require('fs')


const dataBuffer = fs.readFileSync('1-json.json')
const jsonString = dataBuffer.toString()
const user = JSON.parse(jsonString)
user.name = 'Marcus'
user.age = 26

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)