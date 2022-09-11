import * as fs from 'fs';
import * as path from "path";
import { parse } from 'csv-parse';

interface Securities {
    security_id: string,
    cusip: string,
    sedol: string
    isin: string
    ric: string,
    bloomberg: string,
    bbg: string,
    symbol: string,
    root_symbol: string,
    bb_yellow: string,
    spn: string,
}

let itemMap = new Map();
let SECURITY_ID: string[] = [];
let CUSIP: string[] = [];
let SEDOL: string[] = [];
let ISIN: string[] = [];
let RIC: string[] = [];
let BLOOMBERG: string[] = [];
let BBG: string[] = [];
let SYMBOL: string[] = [];
let ROOT_SYMBOL: string[] = [];
let BB_YELLOW: string[] = [];
let SPN: string[] = [];

(() => {
    const csvFilePath = path.resolve(__dirname, '../Securities.csv');
    const headers = ['security_id', 'cusip', 'sedol', 'isin', 'ric', 'bloomberg', 'bbg', 'symbol', 'root_symbol', 'bb_yellow', 'spn']
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

    parse(fileContent, {
        delimiter: ',',
        columns: headers,
    }, (error, result: Securities[]) => {
        if (error) {
            console.error(error);
        }

        result.forEach((doc) => {
            SECURITY_ID.push(doc.security_id);
            CUSIP.push(doc.cusip);
            SEDOL.push(doc.sedol);
            ISIN.push(doc.isin);
            RIC.push(doc.ric);
            BLOOMBERG.push(doc.bloomberg);
            BBG.push(doc.bbg);
            SYMBOL.push(doc.symbol);
            ROOT_SYMBOL.push(doc.root_symbol);
            BB_YELLOW.push(doc.bb_yellow);
            SPN.push(doc.spn);
        })
        itemMap.set('security_id', SECURITY_ID);
        itemMap.set('cusip', CUSIP);
        itemMap.set('sedol', SEDOL);
        itemMap.set('isin', ISIN);
        itemMap.set('ric', RIC);
        itemMap.set('bloomberg', BLOOMBERG);
        itemMap.set('bbg', BBG);
        itemMap.set('symbol', SYMBOL);
        itemMap.set('root_symbol', ROOT_SYMBOL);
        itemMap.set('bb_yellow', BB_YELLOW);
        itemMap.set('spn', SPN);
        console.log("Result", result);
        console.log(searchAlgorithm([], 'BA'));
    });
})()

export function searchAlgorithm(preference: string[], keyword: string) {
    let firstArray: string[] = itemMap.get(preference[0]);
    let secondArray: string[] = itemMap.get(preference[1]);
    let thirdArray: string[] = itemMap.get(preference[2]);
    let fourthArray: string[] = itemMap.get(preference[3]);
    let fifthArray: string[] = itemMap.get(preference[4]);
    let sixthArray: string[] = itemMap.get(preference[5]);
    let seventhArray: string[] = itemMap.get(preference[6]);
    let eigthArray: string[] = itemMap.get(preference[7]);
    let ninthArray: string[] = itemMap.get(preference[8]);
    let tenthArray: string[] = itemMap.get(preference[9]);
    if (preference.length > 0) {
        
        let firstPreference: string[] = [];
        firstArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                firstPreference.push(doc);
            }
        });
        if (firstPreference.length >= 4) return firstPreference;
        if (preference.length < 2) return;

        
        let secondPreference: string[] = [];
        secondArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                secondPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length >= 4) return firstPreference && secondPreference;
        if (preference.length < 3) return;
        
        let thirdPreference: string[] = [];
        thirdArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                thirdPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length >= 4) return firstPreference && secondPreference && thirdPreference;
        if (preference.length < 4) return;

        let fourthPreference: string[] = [];
        fourthArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                fourthPreference.push(doc);
            }
        })

        if (preference.length < 5) return;
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference;

        
        let fifthPreference: string[] = [];
        fifthArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                fifthPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference;
        if (preference.length < 6) return;
        let sixthPreference: string[] = [];
        sixthArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                sixthPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthArray.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthArray;
        if (preference.length < 7) return;
        let seventhPreference: string[] = [];
        seventhArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                seventhPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference;
        if (preference.length < 8) return;
        let eigthPreference: string[] = [];
        eigthArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                eigthPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length + eigthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference && eigthPreference;
        if (preference.length < 9) return;
        let ninthPreference: string[] = [];
        ninthArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                ninthPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length + eigthPreference.length + ninthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference && eigthPreference && ninthPreference;
        if (preference.length < 10) return;
        let tenthPreference: string[] = [];
        tenthArray.forEach((doc: string) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                tenthPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length + eigthPreference.length + ninthPreference.length + tenthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference && eigthPreference && ninthPreference && tenthPreference;
        return null;
    } else {
        let preference: string[] = [];
        itemMap.get('security_id').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })
        itemMap.get('cusip').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('sedol').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('isin').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('ric').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('bloomberg').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('bbg').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('symbol').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('root_symbol').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('bb_yellow').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('spn').forEach((doc: string) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        });

        return preference;
    }
}

export function getData(keyword: string) {
    let index = 0;
    let array: string[] = [];
    if (itemMap.get('security_id').indexOf(keyword) !== -1) {
        index = itemMap.get('security_id').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;

    }
    if (itemMap.get('cusip').indexOf(keyword) !== -1) {
        index = itemMap.get('cusip').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }
    if (itemMap.get('sedol').indexOf(keyword) !== -1) {
        index = itemMap.get('sedol').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }
    if (itemMap.get('isin').indexOf(keyword) !== -1) {
        index = itemMap.get('isin').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }
    if (itemMap.get('ric').indexOf(keyword) !== -1) {
        index = itemMap.get('ric').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }
    if (itemMap.get('bloomberg').indexOf(keyword) !== -1) {
        index = itemMap.get('bloomberg').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }
    if (itemMap.get('bbg').indexOf(keyword) !== -1) {
        index = itemMap.get('bbg').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }
    if (itemMap.get('symbol').indexOf(keyword) !== -1) {
        index = itemMap.get('symbol').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }
    if (itemMap.get('root_symbol').indexOf(keyword) !== -1) {
        index = itemMap.get('root_symbol').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }

    if (itemMap.get('bb_yellow').indexOf(keyword) !== -1) {
        index = itemMap.get('bb_yellow').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }

    if (itemMap.get('spn').indexOf(keyword) !== -1) {
        index = itemMap.get('spn').indexOf(keyword);
        array.push(itemMap.get('security_id')[index]);
        array.push(itemMap.get('cusip')[index]);
        array.push(itemMap.get('sedol')[index]);
        array.push(itemMap.get('isin')[index]);
        array.push(itemMap.get('ric')[index]);
        array.push(itemMap.get('bloomberg')[index]);
        array.push(itemMap.get('bbg')[index]);
        array.push(itemMap.get('symbol')[index]);
        array.push(itemMap.get('root_symbol')[index]);
        array.push(itemMap.get('bb_yellow')[index]);
        array.push(itemMap.get('spn')[index]);
        return array;
    }

}
// Directory '../Securities.csv'

/*
Notes: 
- exact match to any of its street IDs, case-insensitive
- Closer the query is to a result = more relevant
- Certain streetIDs have more priority than others... determine this by the behavior of the user (if 1 street id is more searched for prioritize it more)
- Allow end user to select a security
- Different street id types can be the same for a security
*/