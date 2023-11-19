//Nos traemos el servidor al index que es la pagina de inicio
const app = require("./app");
require('dotenv').config;
//Requerimos la base de datos mongo y al requerirlo se ejecutan las funciones como el archivo no exporta nada no es necesario crear una constante

require("./database");
////// Creamos una funcion asincrona para conectarnos a un puerto
async function main() {
	await app.listen(app.get('port')); //al usar= app.get traemos app.port

	console.log("SERVER ON PORT", app.get('port'));
}

main();
