const userCtrl = {} ; 


userCtrl.getUser = (req, res) => res.send(" GET Users Route")
userCtrl.createUser= (req, res) => res.send(" CREATE Users Route")
userCtrl.deleteUser= (req, res) => res.send(" DELETE Users Route")


module.exports = userCtrl