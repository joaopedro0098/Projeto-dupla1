const verificarNota = (aluno) => {
    if(aluno.nota.matematica >= 7) {
        console.log(`${aluno.nome} ${aluno.sobrenome} foi aprovado em matemática!`)
    }else{
        console.log(`${aluno.nome} ${aluno.sobrenome} foi reprovado em matemática!`)
    }

    if(aluno.nota.portugues >= 7) {
        console.log(`${aluno.nome} ${aluno.sobrenome} foi aprovado em portugues!`)
    }else{
        console.log(`${aluno.nome} ${aluno.sobrenome} foi reprovado em portugues!`)
    }

    if(aluno.nota.fisica >= 7) {
        console.log(`${aluno.nome} ${aluno.sobrenome} foi aprovado em fisica!`)
    }else{
        console.log(`${aluno.nome} ${aluno.sobrenome} foi reprovado em fisica!`)
    }

    if(aluno.nota.quimica >= 7) {
        console.log(`${aluno.nome} ${aluno.sobrenome} foi aprovado em quimica!`)
    }else{
        console.log(`${aluno.nome} ${aluno.sobrenome} foi reprovado em quimica!`)
    }
}

module.exports = verificarNota