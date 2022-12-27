var formulario = document.querySelector('form')

formulario.addEventListener('submit',function(e){
    //bloqueia o refresh    
    e.preventDefault()


    //Url da pesquisa
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    //Valor do Inpt  Name
    let nome = document.getElementById("name")


    //concatena a URL com o inputname
    urlForm = urlForm + this.name.value


    //Transforma os valores em minúsculos
    urlForm = urlForm.toLocaleLowerCase()

    //ID content 
    let resposta = document.getElementById('content')

    //ID Imgpokemon
    let imagem = document.getElementById('imgPokemon')

    //  reposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiuscula( data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)            
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='"+ data.sprites.front_default +" '><img src='"+ data.sprites.back_default +"'>"


        }) 
        .catch(function(err) {
        if (err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            html ='Pokemón não encontrado!☹️'
        } else {
            html =  err
            }
            resposta.innerHTMl = html
        })

});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
} 