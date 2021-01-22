import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [menu, setMenu] = useState([]);

 

 
  const [total, setTotal] = useState(0);
  const pizzaReducer = useSelector((state) => state.pizzaReducer);


  useEffect(() => {
    getPizza();
    getTotal();
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

    dispatch({ type: 'SET_PIZZA', payload: pizzaToSend });
    getTotal();
  }; //end handleAdd


  const handleDelete = (pizza) => {
    console.log('clicked Delete');

    dispatch({ type: 'REMOVE_PIZZA', payload: pizza.id });
    getTotal();
  }; //end handleDelete

  const getTotal = () => {
    if (pizzaReducer.length !== 0) {
      return setTotal(
        pizzaReducer.reduce((acc, item) => {
          return acc += item.price;
        })
      );
    }
  };

  const handleNext = () => {
    console.log('clicked Next');
    history.push('/info');
  }; //end handleNext

  return (
    <div>

      {menu.map((pizza) => (
        <div className="pizzaBox" key={pizza.id}>
           
            <div><img src={pizza.image_path} /></div>
            {pizza.name}
            {pizza.description}
            {pizza.price}
            <div className="buttonBox">
                <button className="addBtn" onClick={ () => handleAdd(pizza)}>➕</button>
                <button className="removeBtn" onClick={ () => handleDelete(pizza)}>➖</button>
            </div>

        </div>
      ))}
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

export default Home;
