import app from './app';
//solo si usamos mongo import { startConnection } from './database';

async function main() {
  //solo si usamos mongo startConnection();
  await app.listen(app.get('port'));
    console.log("server on port", app.get('port'));
}

main();