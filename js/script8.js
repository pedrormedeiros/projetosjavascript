/* Objetivo: fazer o carregamento da url com filmes
Será usado o comando fetch() para localizar 
e carregar os filmes e exibir em uma página html
*/
function carregarFilmes() {
    //LOCALIZE O ARQUIVO 
    fetch("js/apiFilmes.json")



        //RECEBA OS DADOS LOCALIZADOS EM JSON
        .then((response) => response.json())

        //GUARDE OS DADOS NA VARIÁVEL DADOS
        .then((dados) => {
            console.log(dados.results);
            var saida = "<div id=filme>";
            dados.results.map((item, i) => {

                saida += `
                 <div>
                 <a href="${item.link}" target="_blank">
                  <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
                  <p id=voto>${item.vote_average}</p>
                  <h2>${item.title}</h2>
                  <p id=data>${item.release_date}</p>
                 </div>

                 </a>

                `;
            });
            saida += "</div>";
            document.body.innerHTML += saida;
        })
        .catch((erro) => console.log(`Erro ao tentar executar a API -> ${erro}`));

}