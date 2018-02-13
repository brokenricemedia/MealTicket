const router = require("express").Router();
const db = require("../../models");


// Matches with "/api/login"
router.post("/", (req, res) => {
		console.log(req.body);
	db.User.findOne({
		// email: {$eq:req.body.email},
		// password:{$eq:req.body.password}
		email: req.body.email,

	})
	.then((dbChef) => {
		//check if req.body.password is === dbChef.password

		
	})
      .catch(err => res.status(422).json(err));
})

module.exports = router;
