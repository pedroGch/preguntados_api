const model = require('./../database/models')

//get all users
const getUsers = async (req,res) => {
  const users = await model.User.findAll({
    include:[{model: model.Task, attributes: ['id','name','description','startDate','endDate','completed']}]
  })
  return res.status(200).json({users})
}

// delete a user through an id
const deleteUser = async (req, res) => {
  const {id} = req.params
  await model.User.destroy({where: {id : id}})//primer id nombre del atriburo sengundo id nombre del parametro
  const users = await model.User.findAll() //esto se saca
  return res.status(201).json({users})
}

const updateUser = async (req,res) =>{
  const {id} = req.params //id que quiero actualizar
  const data = req.body //datos nuevos a actualizar
  const updated = await model.User.update(data, {where: {id : id}})
  const user = await model.User.findByPk(id)
  return res.status(201).json({user})
}

module.exports = {
  getUsers,
  deleteUser,
  updateUser 
}