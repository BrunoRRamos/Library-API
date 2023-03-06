//Importanto arquivo que comtem o servidor do Express
import app from "./src/app.js";
import dotenv from "dotenv"
dotenv.config();

//Cria uma porta para o Server ouvir
//Pode ser a porta da produção ou a porta 3000
const port = process.env.PORT;

//Inicia o servidor
app.listen(port, () => {
    console.log(`Server listening: http://localhost:${port}`)
});