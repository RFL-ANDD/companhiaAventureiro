//dados recebidos a partir de dados.js
//função loadRecentContent() - Carrega página principal com os 5 episódios mais novos
function loadRecentContent() {
    //definine section resultados
    let section = document.getElementById('resultados-pesquisa');
    console.log("Executou all()");
    //inicializa string para armazenar resultados
    let resultados = '';
    //itera cada elementos em dados.js
    for (let i=0; i<5 && i<dados.length; i++) {
        let dado = dados[i];
        resultados += `
            <div class="item-resultado">
                <div class="titulo-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                </div>
                <div class="embedded-meta">
                    <p class="embedded-meta">${dado.plugin}</p>
                </div>
                <div class="descricao-meta">
                    <p class="descricao-meta">${dado.descricao}</p>
                </div>
                <div class="links-meta">
                    <a href=${dado.link} target="_blank">Ouça no spotify</a>
                </div>
            </div>
        `
    //final instrução for
    }
    //Preenche HTML com resultados de pesquisa
    section.innerHTML = resultados;
}
//final função loadRecentCOntent()
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
                    <div class="titulo-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                    </div>
                    <div class="embedded-meta">
                        <p class="embedded-meta">${dado.plugin}</p>
                    </div>
                    <div class="descricao-meta">
                        <p class="descricao-meta">${dado.descricao}</p>
                    </div>
                    <div class="links-meta">
                        <a href=${dado.link} target="_blank">Ouça no spotify</a>
                    </div>
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