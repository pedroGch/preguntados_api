const {Router} = require("express");
const userRoutes  = require("./user.routes")
const authRoutes  = require("./auth.routes")

const loggedInRoutes = () => {
  //aca se registran todas las rutas para los usarios logeados
  const router = Router();
  router.use('/users', userRoutes);
  return router;
};

const authenticatorRoutes = () => {
  //aca se registran todas las rutas, para la autenticacion
  const router = Router();
  router.get("/", (req,res)=>res.status(200).send("WELCOME TO THE API!"));
  router.use('/auth', authRoutes);
  return router;
};
module.exports = { loggedInRoutes, authenticatorRoutes }

