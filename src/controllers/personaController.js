
let obj_1 ={
    "nombre": "Luis Fernando",
    "apellido":"Machado",
    "email": "Luisf_mach2@yahoo.com"
}
let obj_2 ={
    "nombre": "pedro",
    "apellido":"alvarez",
    "email": "alvarez@gmail.com"
}
let obj_3 ={
    "nombre": "calos",
    "apellido":"torres",
    "email": "torres@gmail.com"
}
let obj_4 ={
    "nombre": "emilio",
    "apellido":"sandobal",
    "email": "sandoval@gmail.com"
}

var personas =[obj_1,obj_2,obj_3,obj_4];

class personaController{
    constructor(){

    }

    //Acciones o metodo que procesaran solicitud http
    getPersona(req, res){
        //retornar Datos
        res.status(200).json(personas);
    }

    crearPersona(req, res) {
        //Obtener datos de la peticion
        let {nombre, apellido, email} = req.body;
        if(nombre != null && apellidos!= null && email != null){
            let obj = {nombre, apellido, email};
            personas.push(obj);
            //personas.push(req.body);
            //personas.push{nombre, apellido, email};
            res.status(201).json({"messaje": "Usuario creado"});
        }else{
            res.status(400).send();
        }
    }

    actualizarPersona(req, res){
        //capturar datos del cuerpo de la peticion
        let {nombre, apellido, email} = req.body;
        //buscar la persona en el array por el email y actualizarla
        personas.map(element =>{
            if (element.email == email){
                element.nombre = nombre;
                element.apellido = apellido;
            }
        });
        res.status(200).json({ "message": "Usuario actualizado" });
    }    

    eliminarPersona(req, res){
        let email = req.params.email;
        //Eliminar un usuario por email del arreglo personas
        let tempoPersonas = [];
        personas.forEach(objPersona =>{
            if (objPersona.email != email){
                tempoPersonas.push(objPersona);
            }
        });
        personas = tempoPersonas;
        res.status(200).send();

    }

}

module.exports = personaController;