import React from 'react'
import { useState } from 'react'
import "./SearchInput.css"
import SearchOutput from './SearchOutput'
import search from "../assets/search.svg"
import Trie from "./trie";

const dictionary = {
  words: ['hello','helium','world','car','carpet','test','this','that','those','working','is']
}

const SearchInput = () => {
    const [prefix, setPrefix] = useState('');
    const [suggestion, setSuggestion] = useState('');

    var myTrie = new Trie();

    (async()=>{
      // const dictionary = await getWords();
      const words = dictionary.words;
      for (let i = 0; i < words.length; i++) {
          const word = words[i];
          myTrie.insert(word)
      }
    })();

    const onChange = (e) => {
      var value = e.target.value;
      setPrefix(value);
      var words = value.split(" ");
      var trie_prefix = words[words.length - 1].toLowerCase();
      var found_words = myTrie.find(trie_prefix).sort((a, b) => {
        return a.length - b.length;
      });
      var first_word = found_words[0];
      if (
        found_words.length !== 0 &&
        value !== "" &&
        value[value.length - 1] !== " "
      ) {
        if (first_word != null) {
          var remainder = first_word.slice(trie_prefix.length);
          setSuggestion(value + remainder);
        }
      } else {
        setSuggestion(value);
      }
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        setPrefix(suggestion);
      }
    };

    const myFunction = () => {
        console.log("Clicked")
    };
    
  return (
    <>
    <div className='Search'>
    <label className='Search-inbox'>
        <span className='search-input-inside'>
            <input 
            className='search-input' 
            name='search-bar'
            type="text" 
            id='search-bar'
            placeholder='Search...'
            value={prefix}
            onChange={onChange}
            onKeyDown={handleKeyDown} />

            {/* <input 
            type="text"
            name="search-bar"
            id="search-bar2"
            value={suggestion} /> */}

        </span>
        
    <img className='search-icon' src={search} alt="search icon" height="80"/>
    <button type='submit' className='search-btn' onClick={myFunction}></button>
    </label>
    </div>
    <SearchOutput />
    </>
  )
}

export default SearchInput