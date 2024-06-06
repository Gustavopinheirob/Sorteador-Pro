

function generateNumber(){

    const min = Math.ceil(document.querySelector('.min-num').value)
    const max = Math.floor(document.querySelector('.max-num').value)
    
    if(max > min){
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
        alert(result)
        console.log(result)
    } else {
        alert("O valor minimo não pode ser maior que o valor maximo!")
    }





}
