import dotenv from "dotenv-safe";
import add from "@src/math/add";

dotenv.config();

console.log("NodeJS API");

console.log(process.env.NODE_ENV);

console.log(process.env.EXAMPLE_VAR);

console.log(add(1, 2));
