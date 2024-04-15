const e = require("express");
const { dbTeste } = require("./dbTeste");




function buscarUsuario(req, res){
    console.log("---------------------------");
    console.log("INICIANDO NOVA BUSCA");
    console.log("---------------------------");

    let resultado = false;
    const param = req.query
    console.log(param)
    let opcaoDeBusca = [];


    if(Object.keys(param).length>0){
        const parametro = Object.keys(param)[0];

        console.log(parametro)
        switch (parametro) {
            case "id":
                const id = req.query.id;
                opcaoDeBusca = ["id", id];

                resultado = dbTeste.find(i => i.id == id);
                break;

            case "curso":
                const curso = req.query.curso;
                opcaoDeBusca = ["curso", curso];

                resultado = dbTeste.filter(i => i.curso == curso);
                break;

            case "tipo":

                const tipo = req.query.tipo;                
                opcaoDeBusca = ["tipo", tipo];

                resultado = dbTeste.filter(i => i.tipo == tipo);
                break;

            case "email":
                const email = req.query.email;                
                opcaoDeBusca = ["email", email];

                resultado = dbTeste.filter(i => i.email == email);
                break;
        
            default:
                break;
        }
    }

    


    
    if (resultado) {
        console.log(resultado)
        res.status(200).send(resultado);
    } else {
        res.status(404).send(`Não foi encontrado nenhum usuário com o ${opcaoDeBusca[0]} sendo ${opcaoDeBusca[1]}`);
    }
}


function criarUsuario(req, res){
    console.log("---------------------------");
    console.log("CRIANDO NOVO USUÁRIO");
    console.log("---------------------------");

    const param = req.query;
    // Identificar último ID para não repeti-lo
    const ultimoIdCriado = dbTeste[dbTeste.length-1].id;

    const novoUsuario = {
        id: ultimoIdCriado + 1,
        nome: param.nome,
        tipo: param.tipo,
        status: param.status,
        curso: param.curso,
        email: param.email,
        telefone: param.telefone
    }

    dbTeste.push(novoUsuario);
    console.log(dbTeste);
    res.status(200).send(novoUsuario)

    


        

    // http://localhost:3001/usuarios/criar?tipo=candidato&nome=testando&status=matriculado&curso=frontend&email=teste@teste&telefone=1199090
}

module.exports = { buscarUsuario, criarUsuario };