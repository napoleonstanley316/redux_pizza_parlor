import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();


  const [menu, setMenu] = useState([]);
  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    getPizza();
  }, []);

  const getPizza = () => {
    axios
      .get('/api/pizza')
      .then((response) => {
        console.log(response.data);
        setMenu(response.data);
      })
      .catch((error) => {
        alert('error in getting Pizza List');
        console.log(error);
      });
  }; //end getPizza

  const handleAdd = (pizza) => {
    let pizzaToSend = {id: pizza.id, name: pizza.name, price: pizza.price}
    
    console.log('clicked Add');
    setIsAdd(!isAdd);
    dispatch({ type: 'SET_PIZZA', payload: pizzaToSend })
  } //end handleAdd

  const handleDelete = (pizza) => {
    
    console.log('clicked Delete');
    setIsAdd(!isAdd);
    dispatch({ type: 'REMOVE_PIZZA', payload: pizza.id})
  } //end handleDelete

  const handleNext = (pizza) => {
    
    console.log('clicked Next');
    
    history.push('/info');
    
  } //end handleNext

  return (
    <div>
      {menu.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.image_path} />
          {pizza.name}
          {pizza.description}
          {pizza.price}
          {isAdd ? (
            <button onClick={ () => handleAdd(pizza)}>ADD</button>
          ) : (
            <button onClick={ () => handleDelete(pizza)}>REMOVE</button>
          )}
        </div>
      ))}
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

export default Home;
