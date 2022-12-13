async function apiDados(){
    const dados = [
        {
            name: 'João',
            idade: '17'
        },
        {
            name:'Pedro',
            idade:'18'
        }
    ]

    let i = 0;
    while(i<5000){
        i += 1;
        console.log(i);
    }

    return dados;
}

const $buttonProcurar = document.querySelector('#procurar');

//async function
async function procurarDados(){
    const dadosusers = await apiDados();
    return dadosusers;
}


$buttonProcurar.addEventListener('click',(e)=>{
    console.log('Botão acionado');
    console.log(procurarDados().then(response => console.log('resposta final')));
    console.log('a');
})







