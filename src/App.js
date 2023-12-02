import './App.css';
import Header from './header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react'
import AddItem from './AddItem';
import SearchItem from './searchItem';


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  const setAndSaveItem = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const [search, SetSearch] = useState('')
  
  const [newItem,setNewItem] = useState('');


  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setAndSaveItem(listItems);
  }

  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setAndSaveItem(listItems);
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id,checked: false, item};
    const listItems = [...items,myNewItem];
    setAndSaveItem(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // console.log(items)
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Groceries list" />
       
      <AddItem newItem={newItem} 
        setNewItem={setNewItem} 
        handleSubmit={handleSubmit}
      />
      
      <SearchItem search={search} SetSearch={SetSearch}/>
      <Content items={items.filter(item => item.item && item.item.toLowerCase().includes(search.toLowerCase()))}
       handleCheck={handleCheck}
       handleDelete={handleDelete} />
      <Footer />
    </div>
    
  );
}

export default App;
