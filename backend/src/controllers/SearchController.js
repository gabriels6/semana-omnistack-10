const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
async index(request, response){
    const{ latitude, longitude, techs} =  request.query;

    const techsArray = parseStringAsArray(techs);

    //filtro
    const devs  = await Dev.find({
        techs: {
            //filtro: se os usuarios tem a tecnologia dentro de; $in <- operador
            $in: techsArray,
        },
        location: {
            //filtro: encontrar objetos proximos
            $near: {
                //Ponto de coordenadas
               $geometry: {
                   type: 'Point',
                   coordinates: [longitude, latitude],
               },
               //Distância máxima
               $maxDistance: 10000, 
            },
        },
    });

    //Buscar todos os Devs em um raio de 10km
    //Filtrar por tecnologias
    return response.json({ devs });
}

}