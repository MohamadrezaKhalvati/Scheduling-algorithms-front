import { execSync } from "child_process";
import * as config from "../src/utils/config.json";

function generateAPI() {
  generateSwagger()
}

function generateSwagger() {
  const schemaPath = config.serverSchemaAddress;
  const outputPath = `${process.cwd()}/src/utils/swagger`
  const command = `npx swagger-typescript-api -p ${schemaPath} -o ${outputPath}`
  execSync(command, { stdio: "inherit" })
}


generateAPI()