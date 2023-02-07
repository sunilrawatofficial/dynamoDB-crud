
const userModel = require('../models/users')

class User {

   async create(userObject) {
      try {

         userObject.id = Date.now().toString(36);
         const user = new userModel()
         return await user.create(userObject)
      } catch (error) {
         throw error
      }
   }
   async findById(id) {
      try {
         const users = new userModel();
         return await users.findById(id)
      }
      catch (error) {
         throw error
      }
   }

   async list() {
      try {
         const users = new userModel();
         return await users.list();
      }
      catch (error) {
         throw error.message;
      }
   }

   async update(userData, id) {
      try {
         const users = new userModel();
         userData.id = id;
         return await users.update(userData); 
      }
      catch (error) {
         throw error
      }
   }

   async delete(id) {
      try {
         const users = new userModel();
         return await users.delete(id);
      }
      catch (error) {
         throw error
      }
   }
}
module.exports = User;