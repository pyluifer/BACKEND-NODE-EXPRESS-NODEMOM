// importar express
const express = require('express');
const PersonaRouter = require('./routers/personaRouter');

class Server{
    // metodo constructor
    constructor(){
        //crear aplicacion express
        this.app = express();
        this.config();
    }

    config(){
        // configuarar/indicar el puertopor el que corre el servidor
        this.app.set('port', process.env.PORT ||3000);
        //indicar que los datos enviados o recibidos al servidor esten en formato JSON
        this.app.use(express.json());
        //CREAR/CONFIGURAR RUTA RAIZ DEL SERVIDOR
        let router = express.Router();
        // configurar metodo get en la raiz de nuestro servidor.
        router.get('/', (req,res)=>{
            res.status(200).json({"mensage": "ALL OK"});
        });
        // CREAR OBJ RUTAS
        const objPersonaR = new PersonaRouter(); 
        //******* Añadir rutas a express **************
        this.app.use(router);
        this.app.use(objPersonaR.router);
        //levantar el servidor / indicar que quedara a la escucha
        /* recibe dos parametros:
        1-> El puerto por el que corre el servidor
        2-> Una funcion que se dispara al correr servidor */
        this.app.listen(this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto -->", this.app.get('port'));
            console.log("hola mundo con nodejs con express");
        });
    }
}

// crear un objeto tipo servidor 
const objServer = new Server();