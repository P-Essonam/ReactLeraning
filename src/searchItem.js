import React from 'react'

const SearchItem = ({search,SetSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searchItem">Search</label>
        <input type="search" name="searchItem" id="searchItem"
        role='searchBox'
        placeholder='Search item' 
        value={search}
        onChange={(e) => SetSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem