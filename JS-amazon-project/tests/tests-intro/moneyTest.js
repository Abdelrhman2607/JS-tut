import {formatCurrency} from '../scripts/utils/money.js';


function valueTest(value, expected, descr){
    console.log(descr);
    if (formatCurrency(value) === expected){
    console.log('passed');
    }
    else{
        console.log('failed');
    }
}
console.log("test suite: formatCurrency");
    valueTest(2095,'20.95', 'convert cents into dollars');
    valueTest(0,'0.00', 'handles 0');
    valueTest(2000.5,'20.01', 'rounds up to nearest cent');