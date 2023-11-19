const mongoose = require("mongoose");
require("dotenv").config(); // Asegúrate de tener esta línea si estás usando dotenv

mongoose.connect(
	process.env.MONGO_URI
		? process.env.MONGO_URI
		: "mongodb://localhost:27017/test1",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const conection = mongoose.connection;

conection.on("error", console.error.bind(console, "MongoDB connection error:"));
conection.once("open", () => {
	console.log("CONECTADOS A MONGODB, PAPURRI");
});
