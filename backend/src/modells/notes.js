//importamos el esquema que es donde se van a guardar todos los datos que quiero que se guarden, aca los voya definir y el model es para luego poder ingresar

const { Schema, model } = require("mongoose");
//si cambio el nombre aca tambien lo tengo que cambiar abajo al exportar


const noteSchema = new Schema(
	{
		nombre: String,
		logo: String,
		direccion: String,
		localidad: String,
        email: String,
		mp4: String,
		web: String,
		link_ig: String,
		link_tw: String,
		link_linke: String,
		link_whats: Number,
		rubro: String
	},
	{
		timeseries: true,
		versionKey: false,
        trim:true
	}
);



module.exports=  model('Note', noteSchema)

