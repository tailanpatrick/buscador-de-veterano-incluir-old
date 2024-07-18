const input = document.querySelector('input[name="cpf"]');

input.addEventListener('keyup', (e)=> {
    input.value = cpfMask(input.value);

});

function cpfMask(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1.$2");   
    v=v.replace(/(\d{3})(\d)/,"$1.$2");
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return v;
}