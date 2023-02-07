const TABLE_NAME = "users"

class User {
   async create(user) {
      try {
         return await writeDynamoClient.put({
            TableName: TABLE_NAME,
            Item: user
         }).promise()

      } catch(error) {
         throw error
      }
   }

   async findById(id) {
      try {
         return await readDynamoClient.get({
            TableName: TABLE_NAME,
            Key: {id}
         }).promise()

      } catch (error) {
         throw error
      }
   }

   async list() {
      try {
         return await readDynamoClient.scan({
            TableName: TABLE_NAME,
         }).promise();

      } catch (error) {
         throw error
      }
   }

   async update(userData) {
      try {
         return await writeDynamoClient.put({
            TableName: TABLE_NAME,
            Item: userData
         }).promise()
      } catch (error) {
         throw error
      }
   }

   async delete(id) {
      try {
         return await writeDynamoClient.delete({
            TableName: TABLE_NAME,
            Key: {id}
         }).promise()
         
      } catch (error) {
         throw error
      }
   }
}
module.exports = User;