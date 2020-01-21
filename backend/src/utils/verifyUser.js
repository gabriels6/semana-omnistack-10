const Dev = require('../models/Dev')

module.exports = function verifyUser(username){

    let ExistDev =  Dev.findOne({username});
    
        //Caso o cadastro de usuario já exista
        return ExistDev
}