const jwt    = require('jsonwebtoken')

const check = (req, res, next) =>{
  const token = req.headers['x-acces-token']
  if (!token){
    return res.send(401).send({
      message: 'No enviaste el Token'
    })
  }
  try {
    jwt.verify(token, "mySecretKey", (err, decoded) => {
      if (err){
        return  res.status(401).send({
          message: "Token invalido"
        })
      }
      //en la varaible decoded tenemos los datos decodigicados 
      req.userId = decoded.id
      console.log(decoded.id)
      next();
    })
  } catch (error) {
    return send(500).send({
      message: "Erro interno del servidor"
    })
  }
  
};

const authJwt = { check };

module.exports = authJwt;