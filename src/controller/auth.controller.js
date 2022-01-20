const model = require('./../database/models')
const bcrypt = require('bcryptjs')
const jwt    = require('jsonwebtoken')
require('dotenv').config();
const { HASH_NUMBER } = process.env;

const login = async (req,res) => {
  if (!req.body.userName || !req.body.password){
    return res.status(401).send({message: 'Datos incompletos'})
  }
  const username = req.body.userName
  const password = req.body.password

  await model.User.findOne({ where: { userName: username } }).then((user) => {
    if (!user){
      return res.status(401).send({message: 'Datos incorrectos'})
    }
    const passwordIsValid = bcrypt.compareSync( password, user.password)

    console.log(passwordIsValid)

    if (!passwordIsValid){
      return res.status(401).send({message: 'Datos incorrectos '})
    }
    const token = jwt.sign({id: user.id}, 'mySecretKey', {expiresIn:86400})

    return res.status(200).send({ 
      id: user.id ,
      username: user.userName,
      token: token 
    })
  })
}

const register = async (req, res) => {
  const {username, password, lastName, firstName, email} = req.body
  if (!username || !password){
    res.status(401).send({message:"Datos incompletos"})
  }
  
  const checkExist = await model.User.count({where: {userName: username}})
  
  if (checkExist > 0){
    return res.status(401).send({message:"Este usuario ya existe"})
  }
  const hashedPassword = bcrypt.hashSync(password, parseInt(HASH_NUMBER))
  const inserted = await model.User.create({userName:username, password:hashedPassword, lastName, firstName, email});
  const token = jwt.sign({id: inserted.id}, 'mySecretKey', {expiresIn:86400})
  return res.status(201).json({ token: token  })
}

module.exports = {
  login,
  register

}