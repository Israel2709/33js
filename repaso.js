function sumaDosNumeros(num1, num2){
    let result = num1 + num2;
    return result; 
}

let prueba1 = sumaDosNumeros(3,4)

console.log( prueba1)

const addTwoNumbers = (num1,num2) => num1 + num2


let pruebaArrow = addTwoNumbers(3, 20)

console.log(pruebaArrow)

let foo = {
    name:"some Object",
    greeting: function(){
        console.log(this.name)
    }
}


let bar = {
    name:"some Object",
    greeting: () => {
        console.log(this.name)
    }
}
bar.greeting()

myArr.filter((item) => {
    return item.id === 1
})


setTimeout( ,6000)

function(){
    console.log("hola koders")
}