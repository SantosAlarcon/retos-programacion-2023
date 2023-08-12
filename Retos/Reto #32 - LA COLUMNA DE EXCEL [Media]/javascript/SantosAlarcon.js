import { describe, test } from "node:test"
import assert from "node:assert/strict"

/**
 * Calcula el número de la columna de una hoja de Excel
 * @param columna Columna de Excel (A-Z | AA-ZZ | AAA-ZZZ...)
 * @returns Número calculado a partir de la columna de la hoja de Excel
 */
const numeroColumnaExcel = (columna) => {

    if (typeof columna !== "string") {
        throw new Error("Sólo puedes introducir cadenas");
    } else {
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numero = 0;

        // Si existe una única letra, se devuelve el número correspondiente a esa
        // columna.
        if (columna.length === 1) {
            numero = letras.indexOf(columna) + 1;
        } else {
            // En el siguiente bucle for se declaran dos variables: un índice que
            // comienza por 0, y la variable "j" que equivale al número de elementos
            // de la columna - 1.
            // Por cada elemento se realiza una multiplicación con dos operaciones:
                // 1. La potencia de la longitud de las letras elevado al último
                // elemento.
                // 2. El índice de la letra que se encuentra en la cadena de letras + 1.
            for (let indice = 0, j = columna.length - 1; indice < columna.length; indice++, j--) {
                numero += Math.pow(letras.length, j) * (letras.indexOf(columna[indice]) + 1);
            }
        }

        // Devuelve el número
        return numero;
    }

}

/* TESTING */
describe("Casos de prueba de la función", () => {
    test("A debe devolver 1", () => {
        assert.equal(numeroColumnaExcel("A"), 1);
    });
    test("Z debe devolver 26", () => {
        assert.equal(numeroColumnaExcel("Z"), 26);
    });
    test("AA debe devolver 27", () => {
        assert.equal(numeroColumnaExcel("AA"), 27);
    });
    test("AD debe devolver 30", () => {
        assert.equal(numeroColumnaExcel("AD"), 30);
    });
    test("CA debe devolver 79", () => {
        assert.equal(numeroColumnaExcel("CA"), 79);
    });
    test("AAA debe devolver 703", () => {
        assert.equal(numeroColumnaExcel("AAA"), 703);
    });
    test("BBC debe devolver 1407", () => {
        assert.equal(numeroColumnaExcel("BBC"), 1407);
    });
})
