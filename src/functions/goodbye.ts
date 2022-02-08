import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const requestBody = event.body;
    const parsedBody = JSON.parse(requestBody || "");
    const response = {
      statusCode: 200,
      body: `Goodbye darkness my old ${parsedBody?.name}`,
    };

    return response;
  } catch (err) {
    return {
      statusCode: 500,
      body: "Something goodbye went wrong...",
    };
  }
};
