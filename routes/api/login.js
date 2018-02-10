const router = require("express").Router();
const db = require("../../models");


// Matches with "/api/chef"
router.post("/", (req, res) => {
	console.log(req.body);
	db.Chef.find({
		// email: {$eq:req.body.email},
		// password:{$eq:req.body.password}
		email: req.body.email,
		password: req.body.password
	}).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
})

module.exports = router;
