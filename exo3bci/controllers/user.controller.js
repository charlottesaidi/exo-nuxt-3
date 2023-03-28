const User = require('../Models/User.mysql');

exports.create = async function(req,res) {
  const users = new User({
    email: req.body.email,
    password: req.body.password
  });

  await User.login(users, async (err,data) => {
    // si on décommente => erreur : "Cannot set headers after they are sent to the client"
    // if(err){
    //   res.status(500).send({
    //     message: err.message || 'Une erreur est arrive'
    //   })
    // }

    if(data == null) {
      res.json({error: true, data:'identifiant invalide'});
    } else {
      res.json({success:true, data:data});
    }
  })
}
