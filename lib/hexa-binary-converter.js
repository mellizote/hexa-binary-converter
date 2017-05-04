'use strict';

export function hexa2binary(hexa) {
	hexa = hexa.toUpperCase();
   	var i, binary = '';
    var table = {
        '0': '0000', '1': '0001', '2': '0010', '3': '0011', '4': '0100',
        '5': '0101', '6': '0110', '7': '0111', '8': '1000', '9': '1001',
        'A': '1010', 'B': '1011', 'C': '1100', 'D': '1101', 'E': '1110', 'F': '1111'
    };

    for (i = 0; i < hexa.length; i++) {
        binary += table[hexa[i]];
    }
    return binary;
}

export function binary2hexa(binary) {
   	var i, j, quartet, sum, hexa = '';
    for (i = binary.length-1; i >= 3; i -= 4) {
        quartet = binary.substr(i+1-4, 4);
        sum = 0;
        for (j = 0; j < 4; j++) {
            sum = sum * 2 + parseInt(quartet[j], 10);
        }
        hexa = (sum >= 10)? String.fromCharCode(sum - 10 + 'A'.charCodeAt(0)) + hexa : String(sum) + hexa;
    }
    if (i >= 0) {
        sum = 0;
        for (j = 0; j <= i; j++) {
            sum = sum * 2 + parseInt(binary[j], 10);
        }
        hexa = String(sum) + hexa;
    }
    return hexa;
}