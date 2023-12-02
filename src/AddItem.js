import React from 'react'
import { FaPlus } from 'react-icons/fa'



const AddItem = ({newItem, setNewItem, handleSubmit}) => {

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>

        <input autoFocus required type="text" name="addItem"
         id="addItem" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>

        <button type="submit" aria-label='Add item'><FaPlus /></button>
    </form>
  )
}

export default AddItem