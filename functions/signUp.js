const fetch = require('node-fetch')

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body)
  const url = process.env.ASTRA_GRAPHQL_ENDPOINT
  const query = `
  mutation insertUsers {
    newUSer: insertusers(
      value: {
        user_id: 4,
        first_name: "David",
        last_name: "Bille",
        email: "dabille87@gmail.com",
        password: "123"
      }){
      value{user_id}
    }
  }
  `

  const response = await fetch(url,)

}