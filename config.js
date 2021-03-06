module.exports = {
	name: 'API',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 1919,
	base_url: process.env.BASE_URL || 'http://localhost:1919',
	api_base: '/api',
	db: {
		uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/api',
	},
};