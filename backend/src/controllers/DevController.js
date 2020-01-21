const Dev = require('../models/Dev')

//Biblioteca que busca dados de APIs externas
const axios = require('axios')

const parseAsString = require('../utils/parseStringAsArray')

const verifyUser = require('../utils/verifyUser')

const { findConnections, sendMessage } = require('../websocket')


//Funções do controller: index, show, store, update, destroy

module.exports = {

    
    async index(request, response){
        const devs = await Dev.find();

    return response.json(devs);
    },

    async store(request, response){
   
        const { github_Username , techs, latitude, longitude} = request.body;
    
        const ExistingDev = verifyUser(github_Username)
            
        if(ExistingDev){
            //Busca na API o usuario
        const apiResponse = await axios.get(`https://api.github.com/users/${github_Username}`);
    
    
        const { name,avatar_url,bio } = apiResponse.data
    
        const TechsArray = parseAsString(techs);
    
        //Add latitude e longitude do point
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
    
        const dev = await Dev.create({
            github_Username,
            name,
            avatar_url,
            bio,
            techs: TechsArray,
            location,
        });
        //Filtrar as conexões que estão há, no maximo, 10km de distância
        // e que o novo dev tenha pelo menos uma das tecnologias filtradas

        const sendSocketMessageTo = findConnections(
            { latitude, longitude},
            techs,
        );

        sendMessage(sendSocketMessageTo, 'new-dev', dev)

        return response.json(dev);
        }
         
    },

    //Exercício

    //Altera os dados de um dev
    async update(request,response){

        const{ThisGithub_username, ThisName, ThisAvatar_url, ThisBio, ThisLatitude, ThisLongitude} = request.body;
    
        await Dev.updateOne(
            {
                github_Username:ThisGithub_username
            },
            {
                $set: {
                    name:ThisName,
                    avatar_url:ThisAvatar_url,
                    bio:ThisBio,
                    location:{
                        
                            type: 'Point',
                            coordinates: [ThisLongitude,ThisLatitude],
                        
                        
                    },
                    }
                

            });
            return response.json('Field updated');
    },

    async destroy(request,response){
        
        const{github_username} = request.params;
        
        await Dev.deleteOne(
            {
                github_Username:github_username
            }
        )

    return response.json('Field deleted');
    },

};