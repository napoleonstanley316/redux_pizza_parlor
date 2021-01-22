import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [menu, setMenu] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const pizzaReducer = useSelector((state) => state.pizzaReducer);
  const totalReducer = useSelector((state) => state.totalReducer);

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
    let pizzaToSend = { id: pizza.id, name: pizza.name, price: pizza.price };
    console.log('clicked Add');
    setIsAdd(!isAdd);
    dispatch({ type: 'SET_PIZZA', payload: pizzaToSend });
    getTotal();
  }; //end handleAdd

  const handleDelete = (pizza) => {
    console.log('clicked Delete');
    setIsAdd(!isAdd);
    dispatch({ type: 'REMOVE_PIZZA', payload: pizza.id });
    getTotal();
  }; //end handleDelete

  const getTotal = () => {
    dispatch({ type: 'SET_TOTAL', payload: pizzaReducer });
  };

  const handleNext = () => {
    console.log('clicked Next');
    history.push('/info');
  }; //end handleNext

  return (
    <div>
      <p>Total: {totalReducer}</p>
      {menu.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.image_path} />
          {pizza.name}
          {pizza.description}
          {pizza.price}
          <button onClick={() => handleAdd(pizza)}>ADD</button>
          <button onClick={() => handleDelete(pizza)}>REMOVE</button>
        </div>
      ))}
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

export default Home;
