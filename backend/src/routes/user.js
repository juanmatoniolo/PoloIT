const { Router } = require("express");
const router = Router();

const { getUser,
    createUser,
    deleteUser} = require("../controllers/user.controllers")

router.route("/")
.get(getUser)
.post(createUser)
.delete(deleteUser)


router.route("/:id")
    .get((req, res) => res.json({title: 'asdfasdf'}))
    .put((req, res) => res.json({message: 'NOTA ACTUALIZADA'}))

    module.exports = router;

