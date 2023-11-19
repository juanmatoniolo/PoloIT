const { Router } = require("express");
const router = Router();

//defino todas las funciones en noteCrontrolers
const {
	getNotes,
	createNote,
	updateNote,
	getNote,
	deleteNote,
} = require("../controllers/note.controllers");

router.route("/").get(getNotes).post(createNote);

//	.post();

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;

