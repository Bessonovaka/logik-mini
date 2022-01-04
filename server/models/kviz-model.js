const {Schema, model} = require('mongoose')
const Kviz = new Schema({
    a: {type: Number, required: true},
    b: {type: Number, required: true},
    c: {type: Number, required: true},
    title: {type: String}
})

module.exports = model('Kviz', Kviz)