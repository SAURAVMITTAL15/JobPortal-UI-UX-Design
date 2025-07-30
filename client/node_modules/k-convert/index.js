"use strict";

module.exports = {
    /**
     * Convert a float number to k-metric number
     * @param {number} The number to be converted
     * @return {numberConverted} The k-metric string of the number
     */
    convertTo: number => {
        if (number < 1000) return number.toString();
	   	let numberConverted = "",
            times = 0,
            aux = Math.trunc(number / 100) * 100;
        while (aux / 1000 >= 1) {
            aux /= 1000;
            times++;
        }
        numberConverted = `${aux}`;
        for (let i = 0; i < times; i++) {
            numberConverted = numberConverted.concat("k");
        }
        return numberConverted;
    },
    /**
     * Convert a k-metric string number to a float number
     * @param {string} The k-metric string to be converted
     * @return {aux} The float number converted
     */
    convertFrom: string => {
        let aux;
        for (let i = 0; i < string.length; i++)
            aux = string.toLowerCase().replace("k", "");
        aux = parseFloat(aux);
        for (let i = 0; i < string.length; i++) {
            if (string.charAt(i).toLowerCase() == "k") {
                aux *= 1000;
            }
        }
        return aux;
    }
};
