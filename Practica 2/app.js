/* TO DO:






*/



const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();


// Configuración de Mustache
app.engine('html', mustacheExpress(), '.html');
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
// Configuración para servir archivos estáticos
app.use(express.static(__dirname + '/public'));


// Ruta principal
app.get('/', (req, res) => {
    res.render('index',{});
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});