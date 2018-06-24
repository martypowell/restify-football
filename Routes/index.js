const activeEndpoints = [
    './Teams',
    './Positions',
    './Players',
    './TeamPlayers',
];

module.exports = (server) => {
    activeEndpoints.forEach(endpoint => {
        require(endpoint)(server);
    });
};
