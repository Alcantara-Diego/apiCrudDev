let dbTeste = [
    {
        id: 1,
        nome: "diego",
        tipo: "aluno",
        status: "matriculado",
        curso: "frontend",
        email: "diego@email.com",
        telefone: "11 923249556",
        notas: {
            html: 10,
            css: 8,
            javascript: 9,
            react: 7,
            bootstrap: 7,
            json: 5,
            mysql: 7
        },
        cadastro: {
            data: "11/04/2024",
            tempo: "20240411"
        }
    },
    {
        id: 2,
        nome: "dev",
        tipo: "candidato",
        status: "none",
        curso: "backend",
        email: "dev@email.com",
        telefone: "11 923249556",
        notas: {
            nodejs: 10,
            php: 8,
            mysql: 9,
            validaçãoDeDados: 7,
            criptografia: 7,
            apiRest: 5,
            arquiteturaMVC: 7
        },
        cadastro: {
            data: "11/04/2024",
            tempo: "20240411"
        }
    },
    {
        id: 3,
        nome: "dev",
        tipo: "candidato",
        status: "none",
        curso: "frontend",
        email: "candidato@email.com",
        telefone: "11 923249556",
        notas: {
            html: 10,
            css: 8,
            javascript: 9,
            react: 7,
            bootstrap: 7,
            json: 5,
            mysql: 7
        },
        cadastro: {
            data: "11/04/2024",
            tempo: "20240411"
        }
    }
]

module.exports = {dbTeste}