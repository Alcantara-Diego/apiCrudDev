const validarNovoUsuario = (req, res, next) => {
    const param = req.query;

    const mensagensErro = {
        ausenciaDados: "Requisição recusada devido à ausência de dados necessários",
        formatoIncorreto: "Dados passados no formato incorreto",
        tipoInvalido: "Tipo de usuário inválido",
        cursoInvalido: "Curso inválido"
    };

    const tiposValidos = ["aluno", "candidato"];
    const cursosValidos = ["frontend", "backend", "fullstack"];

    if (!param.nome || !param.tipo || !param.status || !param.curso || !param.email || !param.telefone) {

        return res.status(400).send(mensagensErro.ausenciaDados);
    
    } 
    
    else if(!tiposValidos.includes(param.tipo)){

        return res.status(400).send(mensagensErro.tipoInvalido);

    } 
    
    else if(!cursosValidos.includes(param.curso)){

        return res.status(400).send(mensagensErro.cursoInvalido);

    }

   
    next();

}

module.exports = {validarNovoUsuario}