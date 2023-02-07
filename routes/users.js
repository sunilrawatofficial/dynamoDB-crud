const express = require('express')
const userRouter = express.Router();
const { success, err } = require('../helper/apiResponse')
const userController = require('../controllers/UserController')


userRouter.post('/users', async(req, res, next) => {
   try {
      const user = new userController();
      let result = await user.create(req.body)
      res.send(success("success", result, res.statusCode))

   } catch (error) {
      res.status(error.statusCode || 500).send(err(error.message, res.statusCode))
   }
})

userRouter.get('/users', async (req, res, next) => {
   try {
      const user = new userController();
      let result = await user.list();
      res.send(success("success", result, res.statusCode))

   } catch (error) {
      console.log("Failed to fetch user list", error);
      res.status(err.statusCode || 500).send(err(error, res.statusCode))

   }
})

userRouter.get('/users/:id', async (req, res, next) => {
   try {
      const user = new userController();
      let result = await user.findById(req.params.id);
      res.send(success("success", result, res.statusCode))

   } catch (error) {

      console.log("Failed to fetch user details", error);
      res.status(err.statusCode || 500).send(err(error.message, res.statusCode))

   }
})

userRouter.post('/users/:id', async (req, res, next) => {
   try {
      const user = new userController();
      let result = await user.update(req.body, req.params.id);
      console.log(result);
      res.send(success("success", result, res.statusCode))

   } catch (error) {

      console.log("Failed to update user details", error);
      res.status(err.statusCode || 500).send(err(error.message, res.statusCode))
   }
})

userRouter.delete('/users/:id', async (req, res, next) => {
   try {
      const user = new userController();
      let result = await user.delete(req.params.id);
      res.send(success("success", result, res.statusCode))

   } catch (error) {
      console.log("Failed to delete user", error.message);
      res.status(err.statusCode || 500).send(err(error.message, res.statusCode))
   }
})
let userApiRoute = express().use('/api/', userRouter);

module.exports = userApiRoute