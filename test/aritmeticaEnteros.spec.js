const fc = require('fast-check')

describe('Aritmetica de enteros', () => {
    describe('La suma', () => {
        it('es conmutativa', () => {
            fc.assert(
                fc.property(
                    fc.integer(), fc.integer(), (a, b) => a + b === b + a
                )
            )
        })
        it('es asociativa', () => {
            fc.assert(
                fc.property(
                    fc.integer(), fc.integer(), fc.integer(), (a, b, c) =>
                        (a + b) + c === a + (b + c)
                        && a + b + c === a + (b + c)
                )
            )
        })
    })
    describe('La resta', () => {
        // Esta prueba falla cuando a === b && a < 0
        it('no es conmutativa', () => {
            fc.assert(
                fc.property(
                    fc.integer(), fc.integer(), (a, b) => a - b !== b - a
                )
            )
        })
    })
})