'use strict'
require('dotenv').config()

module.exports.hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${process.env.MY_NAME}!!!`,
      input: event
    })
  }

  callback(null, response)
}
