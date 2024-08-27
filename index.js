exports.handler = async function handler(event, context) {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'First lambda project'
    }, null, 2)
  }

  return response;
}
