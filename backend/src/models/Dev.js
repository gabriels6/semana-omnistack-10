/* Entidade do Dev */

const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');
//Dados do Dev
//mongoose.Schema => entidade do DB
const DevSchema = new mongoose.Schema({
    name: String,
    github_Username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location:{
        type: PointSchema,
        index: '2dsphere'
    }
});

//Cria o modelo no DB
module.exports = mongoose.model('Dev', DevSchema);