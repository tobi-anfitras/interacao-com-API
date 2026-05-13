function buscarComentarios(){

    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')

    .then(resposta => resposta.json())

    .then(data => {

        const resultadoGet = document.getElementById('resultadoGet');

        //limpa o conteudo anterior.
        resultadoGet.innerHTML = '';

        data.forEach(comentario => {

            resultadoGet.innerHTML += `
            
            <div class="comentario">

                <h3>${comentario.name}</h3>

                <p>
                    <strong>Email:</strong>
                    ${comentario.email}
                
                </p>

                <p>${comentario.body}</p>

            </div>


            
            `;



        });

    })

    .catch(erro => {
        alert("erro ao buscar comentarios pnf");

        console.log(erro);
    });


}