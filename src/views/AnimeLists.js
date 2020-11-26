import React, { useState } from 'react'
import AnimeList from '../components/AnimeList'
import styled from 'styled-components'
import animeActions from '../actions'
import { useDispatch } from 'react-redux'

function Lists() {
   const listTypes = ['favorite', 'watching', 'watched']
   const [currentListIndex, setCurrentListIndex] = useState(0)
   const dispatch = useDispatch()

   const handleChangeCurrentList = ({ currentTarget }) => {
      setCurrentListIndex(currentTarget.value)
   }
   const handleClearAllLists = () => {
      if (confirm('Are you sure you want to clear ALL lists?'))
         dispatch(animeActions.clearAll())
   }
   const handleClearList = () => {
      const currentList = listTypes[currentListIndex]
      if (confirm(`Are you sure you want to clear ${currentList}?`))
         dispatch(animeActions[currentList].clear())
   }

   const capitalizeFirstLetter = (string) =>
      `${string[0].toUpperCase()}${string.slice(1)}`

   return (
      <>
         <ListsHeader>
            <div>
               {listTypes.map((listType, idx) => (
                  <button
                     value={idx}
                     key={`${listType}Btn${idx}`}
                     onClick={handleChangeCurrentList}
                     className={idx == currentListIndex ? 'active' : null}
                  >
                     <h3>{capitalizeFirstLetter(listType)}</h3>
                  </button>
               ))}
            </div>
            <div>
               <button onClick={handleClearList}>
                  <h3>Clear this list</h3>
               </button>
               <button onClick={handleClearAllLists}>
                  <h3>Clear all lists</h3>
               </button>
            </div>
         </ListsHeader>
         <div style={{ overflow: 'hidden' }}>
            <ListsContent activeList={currentListIndex}>
               {listTypes.map((listType, idx) => (
                  <AnimeList type={listType} key={`${listType}${idx}`} />
               ))}
            </ListsContent>
         </div>
      </>
   )
}

export default Lists

const ListsHeader = styled.div`
   background: #0c0c0c;
   display: flex;
   justify-content: space-between;
   padding: 10px;
   h3 {
      padding: 5px;
      margin: 0;
      color: white;
   }
   button {
      cursor: pointer;
      background: none;
      border: none;
      border-bottom: 3px solid transparent;
      :hover {
         background: var(--medGrey);
      }
   }
   .active {
      border-bottom: 3px solid white;
   }
   @media (max-width: 640px) {
      flex-direction: column;
      align-items: center;
   }
`

const ListsContent = styled.div`
   white-space: nowrap;
   overflow: visible;
   display: flex;
   width: 100%;
   position: relative;
   transform: translateX(${({ activeList }) => `-${activeList * 100}%`});
   transition: transform 0.5s;
`
