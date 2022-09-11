import './App.css';
import SearchInput from './component/SearchInput';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Result from './pages/Result';
import HomePage from './pages/HomePage';

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const itemMap = new Map();
  let SECURITY_ID = [];
  let CUSIP = [];
  let SEDOL = [];
  let ISIN = [];
  let RIC = [];
  let BLOOMBERG = [];
  let BBG = [];
  let SYMBOL = [];
  let ROOT_SYMBOL = [];
  let BB_YELLOW = [];
  let SPN = [];

  React.useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/Securities.csv").then(res => res.text())
    .then((data) => {
      data = data.split("\r\n");

      //security_id = [0], cusip = [1], sedol = [2], isin = [3], ric = [4], bloomberg = [5], bbg = [6], symbol = [7], root_symbol = [8], bb_yellow = [9], spn = [10]
      data.forEach(element => {
        element = element.split(',')
        SECURITY_ID.push(element[0]);
        CUSIP.push(element[1]);
        SEDOL.push(element[2]);
        ISIN.push(element[3]);
        RIC.push(element[4]);
        BLOOMBERG.push(element[5]);
        BBG.push(element[6]);
        SYMBOL.push(element[7]);
        ROOT_SYMBOL.push(element[8]);
        BB_YELLOW.push(element[9]);
        SPN.push(element[10]);
      });
    }).then(() => {
      console.log('pushed')
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
    })
    function getData(keyword, itemMap) {
      console.log(itemMap);
      let index = 0;
      let array = [];
      if (itemMap.get('security_id').indexOf(keyword) === -1) {
        index = itemMap.get('security_id').indexOf(keyword);
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
        console.log(index);
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
  
      return "1"
    }


    function searchAlgorithm(preference, keyword) {
    let firstArray = itemMap.get(preference[0]);
    let secondArray = itemMap.get(preference[1]);
    let thirdArray = itemMap.get(preference[2]);
    let fourthArray = itemMap.get(preference[3]);
    let fifthArray = itemMap.get(preference[4]);
    let sixthArray = itemMap.get(preference[5]);
    let seventhArray = itemMap.get(preference[6]);
    let eigthArray = itemMap.get(preference[7]);
    let ninthArray = itemMap.get(preference[8]);
    let tenthArray = itemMap.get(preference[9]);
    if (preference.length > 0) {
        
        let firstPreference = [];
        firstArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                firstPreference.push(doc);
            }
        });
        if (firstPreference.length >= 4) return firstPreference;
        if (preference.length < 2) return;

        
        let secondPreference = [];
        secondArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                secondPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length >= 4) return firstPreference && secondPreference;
        if (preference.length < 3) return;
        
        let thirdPreference = [];
        thirdArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                thirdPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length >= 4) return firstPreference && secondPreference && thirdPreference;
        if (preference.length < 4) return;

        let fourthPreference = [];
        fourthArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                fourthPreference.push(doc);
            }
        })

        if (preference.length < 5) return;
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference;

        
        let fifthPreference = [];
        fifthArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                fifthPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference;
        if (preference.length < 6) return;
        let sixthPreference = [];
        sixthArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                sixthPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthArray.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthArray;
        if (preference.length < 7) return;
        let seventhPreference = [];
        seventhArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                seventhPreference.push(doc);
            }
        });

        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference;
        if (preference.length < 8) return;
        let eigthPreference = [];
        eigthArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                eigthPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length + eigthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference && eigthPreference;
        if (preference.length < 9) return;
        let ninthPreference = [];
        ninthArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                ninthPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length + eigthPreference.length + ninthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference && eigthPreference && ninthPreference;
        if (preference.length < 10) return;
        let tenthPreference = [];
        tenthArray.forEach((doc) => {
            if (doc.toLowerCase().startsWith(keyword.toLowerCase())) {
                tenthPreference.push(doc);
            }
        });
        if (firstPreference.length + secondPreference.length + thirdPreference.length + fourthPreference.length + fifthPreference.length + sixthPreference.length + seventhPreference.length + eigthPreference.length + ninthPreference.length + tenthPreference.length >= 4) return firstPreference && secondPreference && thirdPreference && fourthPreference && fifthPreference && sixthPreference && seventhPreference && eigthPreference && ninthPreference && tenthPreference;
        return null;
    } else {
        let preference = [];
        itemMap.get('security_id').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })
        itemMap.get('cusip').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('sedol').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('isin').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('ric').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('bloomberg').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('bbg').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('symbol').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('root_symbol').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('bb_yellow').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        })

        itemMap.get('spn').forEach((doc) => {
            if(doc.toLowerCase().startsWith(keyword.toLowerCase())) preference.push(doc);
        });

        return preference;
    }
}
  
  })

//   const filterPosts = (query) => {
//     if (!query) {
//       return null;
//     }

//     return searchAlgorithm([], query)
// };
console.log(itemMap.get('security_id'));
console.log(searchQuery, itemMap);


  return (

    <div className='App'>
      <Navbar />
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {/* <ul>
        {getData(query).map((post) => (
          <li key = {post[0]}>{post[1]}</li>
        ))}
      </ul> */}

      <div id='page-body'></div>
      <Routes>
        <Route path='/' element={<HomePage />} exact />
        <Route path='/result' element={<Result />} />
      </Routes>
      {/* <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
