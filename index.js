const express = require('express'); //importando libreria
const routes = require('./app/controllers/routes')

const app = express(); //creando servidor
app.use(express.json()) // configurando el servidor para envio y recepcion de json

const PORT = 3000;

app.use('/banco', routes);

app.listen(PORT, () => {
    console.log('escuchando puerto:', PORT);
});