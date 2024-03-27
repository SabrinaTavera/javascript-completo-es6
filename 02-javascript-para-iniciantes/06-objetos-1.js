// Objetos 

/**
 *  - Conjunto de variáveis e funç~oes, que são chamadas de propriedades e mátodos.
 *  - Propriedades e métodos consistem em nome (chave) e valor.
 */


//Estrutura do objeto
var pessoa = {
    nome: 'Sabrina',
    idade: 30
}

//Método
/**
 *  - É possível adicionar métodos dentro do objeto0 
 *  - É uma propriedade que possui uma função no local do seu valor.
 */

//Exemplo 

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//Métodos Abreviados
/**
 * Abreviação de area: function() {} para area() {} no ES6+
 */

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));