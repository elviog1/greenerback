const mongoose = require('mongoose')

mongoose.connect(
	process.env.MONGO_CONNECTION,
{
	useUnifiedTopology: true,
	useNewUrlParser: true
}
	).then(()=> console.log('conectado a la base de datos'))
	.catch(error => console.log(error)) 
