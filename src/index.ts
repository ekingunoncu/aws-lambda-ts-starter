import {APIGatewayProxyEvent} from "aws-lambda"

export const handler = async (event: APIGatewayProxyEvent) => {
    if (event.body) {
        console.log(JSON.parse(event.body))
        return {statusCode: 200, body: "Hello World"}
    }
}
