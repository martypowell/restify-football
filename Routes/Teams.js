const apiMethodHandlers = require('../ApiMethodHandlers');

const Teams = require('../Models/TeamModel');
const endpointRoot = '/teams';
const teamsApi = new apiMethodHandlers.ApiEndpointHelper(Teams);

module.exports = (server) => {
	server.get(`${endpointRoot}`, teamsApi.GetAll);
	server.get(`${endpointRoot}/:id`, teamsApi.GetById); //TODO, can we actually pass the id here instead of assuming then name of the id? 

	server.post(`${endpointRoot}`, teamsApi.Save);
};
