const {Schema, model} = require('mongoose')
const TokenSchema = new Schema({
    User: {type: Schema.Types.ObjectId, ref: 'UserSchema'},
    refreshToken: {type: String, required: true}
})

module.exports = model('Token', TokenSchema)