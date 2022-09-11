import React from 'react'
import './SearchOutput.css'

const SearchOutput = () => {
  const results = [
    'mixture',
    'user',
    'application',
    'article',
    'transportation',
    'chemistry',
    'celebration',
    'son',
    'tale',
    'charity'
  ];
  return (
    <>
      <div className="Search-output">
        {results.map(result => {
          return (
            <Result text={result} />
          )
        })}
      </div>
    </>
  )
}

const Result = (props) => {
  return (
    <>
      <p class="result-text">{props.text}</p>
    </>
  )
}

export default SearchOutput