exports.success = (message, result, statusCode) => {
   return {
      message,
      error:false,
      success: true,
      code: statusCode,
      data: result
   }
}

exports.err = (message, statusCode) => {
   //List of common HTTP request code

   const codes = [200, 201, 400, 401, 404, 403, 422, 500];

   const findCode = codes.find((code) => code === statusCode);

   statusCode = findCode ? findCode: 500
   return {
      message,
      code : statusCode,
      error: true,
   };
}