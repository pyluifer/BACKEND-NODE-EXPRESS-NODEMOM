//importar express
const express = require('express');
const PersonaController = require('../controllers/personaController');

class PersonaRouter {
    constructor(){
        //crear un atributo de la clase de tipo de Router
        this.router = express.Router();
        this.config();
    }
    config(){
        //Crea objeto de tipo PersonaController
        const objPersonaC = new PersonaController();
        //END POINTS
        this.router.get('/personas',objPersonaC.getPersona);
        this.router.post('/personas', objPersonaC.crearPersona);
        this.router.put('/personas',objPersonaC.actualizarPersona);
        this.router.delete('/persona/: email', objPersonaC.eliminarPersona);
    }
}

module.exports = PersonaRouter;