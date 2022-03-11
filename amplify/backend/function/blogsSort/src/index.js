const AWSXRay = require("aws-xray-sdk-core")
const AWS = AWSXRay.captureAWS(require("aws-sdk"))

const docClient = new AWS.DynamoDB.DocumentClient()

const BLOGTABLE = process.env.BLOGTABLE

const listBlogsSort = async event => {
  const params = {
    TableName: BLOGTABLE,
    Limit: event.arguments.limit
  }

  console.log(params)

  const scanResults = []
  let items = {}

  do {
    items = await docClient.scan(params).promise()
    items.Items.forEach((item) => scanResults.push(item))
    params.ExclusiveStartKey = items.LastEvaluatedKey
  } while (typeof items.LastEvaluatedKey !== "undefined")

  console.log(items)

  return {
    items: scanResults,
    scannedCount: items.ScannedCount
  }
}

const resolvers = {
  Query: {
    blogsSort: event => {
      return listBlogsSort(event)
    }
  }
}

exports.handler = async (event) => {
  const typeHandler = resolvers[event.typeName]
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName]
    if (resolver) {
      return await resolver(event)
    }
  }

  throw new Error("Resolver not found.")
}