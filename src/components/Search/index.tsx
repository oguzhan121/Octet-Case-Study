import React from 'react'

import { ChangeEvent, FC } from 'react'


interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Search: FC<InputProps> = ({
  onChange,
}) => {
  return (
    <div className="search">
      <div className="search-area">
        <input className="search-input" onChange={onChange} type="text" placeholder="What do you want to watch?" />
        <span className="search-icon">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
              stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default Search