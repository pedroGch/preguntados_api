const router = require("express").Router();

const { 
  getUsers, 
  deleteUser, 
  updateUser  
} = require('./../controller/user.controller')

const { authJwt } = require ('../middleware')

router.get("/", [authJwt.check] , getUsers);

router.delete("/:id", [authJwt.check]  ,deleteUser);

router.put("/:id", [authJwt.check]  ,updateUser);



module.exports = router;