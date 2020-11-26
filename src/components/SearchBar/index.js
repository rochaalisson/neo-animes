import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchButton, Input, Form } from './styles'
import loupe from '../../assets/images/loupe.svg'

export default function SearchBar() {
   const [value, setValue] = useState('')
   const handleValueChange = ({ target }) => {
      setValue(target.value)
   }
   return (
      <Form>
         <Input
            type="text"
            value={value}
            onChange={handleValueChange}
            placeholder="Search..."
         />
         <Link to={`/search?q=${value}`}>
            <SearchButton type="submit">
               <img src={loupe} alt="search" />
            </SearchButton>
         </Link>
      </Form>
   )
}
