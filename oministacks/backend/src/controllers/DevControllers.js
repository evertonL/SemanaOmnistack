const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },
    
    async store(request, response) {

        const { github, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.githubs.com/users/${github}`);

            const { name = login, avatar_url, bio } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            dev = await Dev.create({
                github,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                // location: {
                //     type: PointSchema,
                //     index: '2dsphere'
                // }
            })

        }

        return response.json({ message: 'Hello Word' });

    },

    async update() {

    },

    async destroy() {

    },

}