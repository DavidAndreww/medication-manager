import fetch from 'node-fetch'

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body)
  const url = process.env.ASTRA_GRAPHQL_ENDPOINT
  const query = `
  query getAllUsers{
    users(
      value:{user_id:4}){
      values{
        user_id,
        first_name,
        last_name,
        email,
        password
      }
    }
  }
  `

  const response = await fetch(`https://30984259-c1d7-47f3-8a97-6a07c024a12e-us-east-1.apps.astra.datastax.com/api/graphql/medman`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": process.env.ASTRA_DB_APPLICATION_TOKEN
    },
    body: JSON.stringify({ query })
  })
  
  try {
    const responseBody = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }

  
}