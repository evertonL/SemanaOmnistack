const Dev = requere('../moldels/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    // Buscar todos devs num raio 10Km
    // Filtrar por tecnologias
    async index(request, response){
       
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({

            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coodinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },

        });

        return response.json({ devs: []});
    }
}