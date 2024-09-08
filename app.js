//dados recebidos a partir de dados.js
//função pesquisar()
function pesquisar() {
    //definine section resultados
    let section = document.getElementById('resultados-pesquisa');
    console.log(section);
    //define campoPesquisa como valor digitado no campo pesquisa HTML
    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    console.log(campoPesquisa);
    //define valor de campoPesquisa para letras minúsculas para pesquisa case-insensitive
    campoPesquisa = campoPesquisa.toLowerCase();
    //encerra função se campoPesquisa for string vazia
    if (!campoPesquisa) {
        section.innerHTML = '<p>Nenhum episódio foi encontrado! Você precisa digitar o termo que deseja procurar.</p>';
        return;
    }
    //inicializa string para armazenar resultados
    let resultados = '';
    //inicializa variáveis títulos e descrição para pesquisa case-insensitive
    let titulo = '';
    let descricao = '';
    let tags = '';
    //itera cada elementos em dados.js
    for (let dado of dados) {
    //define títulos e descrição para pesquisa case-insensitive
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
    //se dado.titulo ou dado.descricao inclui campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //Cria elemento HTML
            resultados += `
                <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Ouça no spotify</a>
            </div>
            `
        //final instrução if
        }
    //final instrução for
    }
    //mensagem em caso de nenhum resultado encontrado
    if (!resultados){
        resultados = '<p>Nenhum episódio foi encontrado!</p>';
    }
    //Preenche HTML com resultados de pesquisa
    section.innerHTML = resultados;
}
//final função pesquisar()