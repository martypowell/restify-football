const apiMethodHandlers = require('../ApiMethodHandlers');

const Teams = require('../Models/TeamModel');
const Players = require('../Models/PlayerModel');
const endpointRoot = '/teams';
const teamsApi = new apiMethodHandlers.ApiEndpointHelper(Teams);
const playersApi = new apiMethodHandlers.ApiEndpointHelper(Players);

module.exports = (server) => {
	server.get(`${endpointRoot}`, teamsApi.GetAll);
	server.get(`${endpointRoot}/:id`, teamsApi.GetById); //TODO, can we actually pass the id here instead of assuming then name of the id? 

	server.post(`${endpointRoot}`, teamsApi.Save);


	server.get(`${endpointRoot}/:id/players`, (request, response, next) => {
		const query = { teams:  request.params.id };

		playersApi.GetSome(request, response, next, query);
	});

	server.post(`${endpointRoot}/:id/players`, (request, response, next) => {
		const data = Object.assign({}, request.body, { teams: [ request.params.id ]});
		
		playersApi.Save(request, response, next, data);
	});
};
