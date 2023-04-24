import{useState} from "react";
import {Title} from "./components/Title";
import './App.css';
import { WishListInput } from "./components/WishListInput";
import {WishList} from "./components/WishList";


function App() {

  const [wish, setWish] = useState([
    {
      id: 1,
      productName: "Leona Eclipse Solar",
      completed: false,
    },
    {
      id: 2,
      productName: "Jinx Christmas",
      completed: false,
    },
    {
      id: 3,
      productName: "Tristana Dragon Slayer",
      completed: false,
    },
    {
      id: 4,
      productName: "Zyra Sorcerer",
      completed: false,
    },
    {
      id: 5,
      productName: "Hihg Noon Leona",
      completed: false,
    },
    {
      id: 6,
      productName: "Battle Queen Diana",
      completed: false,
    },
    {
      id: 7,
      productName: "Galio",
      completed: false,
    },
    {
      id: 8,
      productName: "Samurai Shen",
      completed: false,
    },
    {
      id: 9,
      productName: "Queen Bee Oriana",
      completed: false,
    },
  ])

  const [activeFilter,SetActiveFilter] = useState('all')
  const [filteredWish,SetFilteredWish] = useState(wish)


  const addWish = (productName) => {
    const lastId = wish.length > 0 ? wish [wish.length -1].id : 1;

    const newWish ={
      id: lastId + 1,
      productName,
      completed:false
    }

    const wishList = [...wish]
    wishList.push(newWish);
    setWish(wishList);

  }

  const handleSetComplete = (id) =>{
    const updatedList = wish.map(wish =>{
      if (wish.id ===id) {
        return {...wish, completed: !wish.completed}
      }
      return wish
    })
    setWish(updatedList);
  }

  const handleDelete = (id) => {
    const updatedList = wish.filter(wish => wish.id !== id)
    setWish(updatedList);
  }

  return (
    <div className="App">
      <div className="container">
        <Title/>
        <WishListInput addWish={addWish}/>
        <WishList 
          wish= {wish}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          />
      </div>
    </div>
  );
}

export default App;
