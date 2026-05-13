//GET

function buscarComentarios() {
//faz uma requisição de GET para a API.    
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')

        //recebe a resposta da API
        .then(res =>res.json())


        //recebe dados ja convertidos para JSON
        .then(data => {
            
            alert("exibindo comentarios no console!");

            //mostra o comentario no console do navegador
            console.log(data);

        });


};

//POST

function enviarComentario(){

    fetch('https://jsonplaceholder.typicode.com/comments',{
        //define o metodo de requisição como POST
        method:'POST',
        //informa que os dados enviados estão em formato JSON
        headers:{
            'Content-type':'application/json'
        },
        //converte o objeto javascript para texto JSON.
        body:JSON.stringify({
            //nome enviado para a API.
            nome: "ana",

            //comentario enviado para a API.
            comentario: "Muito bom !!"

        })



    })

    //econvertendo respota api para json e mandado para o console
    .then(res =>res.json())

    .then(data => {

        alert("comentario enviado! veja no console.");

        console.log(data)

    });


}