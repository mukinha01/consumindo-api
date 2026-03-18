fetch("http://localhost:3000/alunos").then(response => {
    if(!response.ok){
        alert("Ocorreu um erro")
    }

    return response.json()
}).then(data => {
    const lista = document.getElementById("containerAlunos")

    data.forEach(function(aluno) {
        const alunoItem = document.createElement("div")
        
        alunoItem.innerHTML = `
        <h3>${aluno.nome}</h3>
        <p>${aluno.email}</p>
        <br>
        `
        lista.appendChild(alunoItem)

    })

})

fetch("http://localhost:3000/professores").then(response => {
    if(!response.ok){
        alert("Ocorreu um erro")
    }

    return response.json()
}).then(data => {
    const lista = document.getElementById("containerProfessores")

    data.forEach(function(professor) {
        const professorItem = document.createElement("div")
        
        professorItem.innerHTML = `
        <h3>${professor.nome}</h3>
        <p>${professor.disciplina}</p>
        <br>
        `
        lista.appendChild(professorItem)

    })

})





