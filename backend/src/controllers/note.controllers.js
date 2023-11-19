const noteCtls = {};
const Note = require("../modells/notes");

noteCtls.getNotes = async (req, res) => {
	const notes = await Note.find();
	res.json(notes);
};

noteCtls.createNote = async (req, res) => {
	const {
		nombre,
		logo,
		direccion,
		localidad,
		email,
		mp4,
		web,
		link_ig,
		link_tw,
		link_linke,
		link_whats,
		rubro,
	} = req.body;

	const newNote = new Note({
		nombre: nombre,
		logo: logo,
		direccion: direccion,
		localidad,
		email: email,
		mp4: mp4,
		web: web,
		link_ig: link_ig,
		link_tw: link_tw,
		link_linke: link_linke,
		link_whats: link_whats,
	rubro
	});
	await newNote.save();
	console.log(newNote);
	res.json({ message: "nota guardada" });
};

/////// /:id
noteCtls.getNote = async (req, res) => {
	const notas = await Note.findById(req.params.id);
	res.json(notas);
};

noteCtls.updateNote = async (req, res) => {
	const {
		nombre,
		logo,
		direccion,
		localidad,
		email,
		mp4,
		web,
		link_ig,
		link_tw,
		link_linke,
		link_whats,
	rubro,
	} = req.body; // Change res.body to req.body

	await Note.findOneAndUpdate(req.params.id, {	
        nombre,
		logo,
		direccion,
		localidad,
		email,
		mp4,
		web,
		link_ig,
		link_tw,
		link_linke,
		link_whats,
		rubro,
	});

    res.json({message: "DATOS ACTUALIZADOS!"});
};


noteCtls.deleteNote = async (req, res) => {
	const notas = await Note.findByIdAndDelete(req.params.id);
	res.json({ message: "ELIMINADO CON EXITO" });
};

module.exports = noteCtls;
