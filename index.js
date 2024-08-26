const response = {
  message: 'First lambda project'
}

exports.handler = async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}
