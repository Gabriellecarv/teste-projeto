const {expect} = require('chai');
    const { soma } = require('../matematica');

    describe('Função de Soma', () => {
        it ('deve retornar a soma de dois npumeros positivos' , () => {
            const resultado = soma (5, 3);
            expect(resultado).to.equal(8);
        });
        it ('deve retornar a soma de um número positivo e um negativo', () => {
            const resultado = soma(10, -5);
            expect (resultado).to.equal(5);
        });
        it ('deve retornar zero ao somar números opostos', () => {
            const resultado = soma(5,-5);
            expect(resultado).to.equal(0);
        });
    });