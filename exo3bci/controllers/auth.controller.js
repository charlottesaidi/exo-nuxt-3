const User = require('../Models/User.mysql');

exports.login = async function(req,res) {
  await User.login(req.body.email, async (err,data) => {
    if(data == null) {
       return res.json({error: true, data:'identifiant invalide'});
    }
    res.json({success:true, data:data});
  })
}

exports.createUser = async function(req,res) {
  const user = new User({
    email: req.body.email,
    roles : req.body.roles,
    password: req.body.password
  });

  await User.create(user, async (err,data) => {
    if(err){
      throw new Error(err.message || 'Une erreur est arrive')
    }

    res.json({success: true, data:data});
  })
}
