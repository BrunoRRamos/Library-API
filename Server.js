//Importanto arquivo que comtem o servidor do Express
import app from "./src/app.js"

//Cria uma porta para o Server ouvir
//Pode ser a porta da produção ou a porta 3000
const port = process.env.PORT || 3000;

//Inicia o servidor
app.listen(port, () => {
    console.log(`Server listening: http://localhost:${port}`)
});